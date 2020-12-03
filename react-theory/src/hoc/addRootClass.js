import React from 'react';

const addRootClass = (Component, className) => {
    return (props) => {
        return (
            <div className={className}>
                <Component {...props}/>
            </div>
        )
    }
}

export default addRootClass;