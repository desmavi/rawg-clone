
const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

const API_KEY = process.env.VITE_RAWG_API_KEY
const BASE_URL = 'https://api.rawg.io/api'

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(config => {
    config.params = {
        key: API_KEY,
        ...config.params,
    };
    return config;
});


app.get('/games', (req, res) => {
    console.log(req.query)
    api.get("games", {
        params: {
            genres: req.query.genres,
            parent_platforms: req.query.parent_platforms 
        }
    })
    .then(response => res.json(response.data))
})

app.get('/genres', (req, res) => {
    api.get("genres")
    .then(response => res.json(response.data))
})

app.get('/platforms', (req, res) => {
    api.get("platforms/lists/parents")
    .then(response => res.json(response.data))
})

app.listen( 8000, () => console.log("server is running"))