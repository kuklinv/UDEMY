import React from "react";
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = (props) => {
    return (
        <div className={classes.Finished}>
            <h4>Results:</h4>
            <ul>
                <li>
                    <strong>1. </strong> Qwestion.....
                    <i className={'fa fa-times' + " " + classes.error}/>
                </li>
                <li>
                    <strong>2. </strong> Qwestion.....
                    <i className={'fa fa-check' + " " + classes.success}/>
                </li>
            </ul>
            <p> You wright in 4 of 12 ......</p>
            <div>
                <button>Repeat</button>
            </div>
        </div>
    );
}

export default FinishedQuiz;