//PROPAGAZIONE EVENTO CUSTOM LOCAL STORAGE
//passare chiave, valore, nome evento custom
const updateLocalStorage = (key:string, value:string, customEvent:string)  => {
    localStorage.setItem(key, value);
    const event = new Event(customEvent)
    dispatchEvent(event)
};

export {updateLocalStorage}

