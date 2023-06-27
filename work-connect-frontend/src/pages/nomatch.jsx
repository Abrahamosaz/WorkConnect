import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch() {
    return (
        <div className='App App-header'>
            <h1>No Page Found!</h1>
            <h3>Seems you visited the wrong route</h3>
            <p>Check the URL for spelling errors</p>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default NoMatch;