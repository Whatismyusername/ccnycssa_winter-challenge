import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {

    return (
        <section style={{textAlign: 'center'}}>
            <h1>Oops, the page you are looking for does not exist...</h1><br />
            <p>Looking for the  
                <Link to="/"> Home Page</Link>?
            </p>
        </section>
    )
}

export default Error