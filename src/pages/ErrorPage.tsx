import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'
import Nav from '../components/Nav'
import Container from '../components/Container'

function ErrorPage() {

    const error = useRouteError()

    return (

            <Container>
                <Nav/>
                <div className='col-span-6 px-6 py-8'>
                    <p className='text-2xl mb-3'>Oops...</p>
                
                    { 
                        isRouteErrorResponse(error) ?
                        <div>{error.data}</div> :
                        <div>An error occured</div>
                    }

                    <Link to="/" className='underline mt-4 inline-block'>Back to home</Link>
                </div>
            </Container>
                
      
    )
}

export default ErrorPage