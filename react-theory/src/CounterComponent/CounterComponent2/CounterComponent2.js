import React from 'react';
import {ClickedContext} from '/home/imroot/Documents/UDEMY/react-theory/src/App.js'

export default props => {
    return (
        <div style={{
            border: '5px solid #ccc',
            width: 200,
            margin: '0 auto'
        }}>
            <h2>Couter 2</h2>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>Clicked</p> : null}
            </ClickedContext.Consumer>
        </div>
    )
}