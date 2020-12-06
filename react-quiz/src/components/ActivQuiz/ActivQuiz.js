import React from 'react';
import classes from './ActivQuiz.module.css';

const ActivQuiz = props => (
    <div className={classes.ActivQuis}>
        <p className={classes.Question}>
            <span>
                <strong>1.</strong>&nbsp;
                   How are you doing?
           </span>
            <small>4 of 12</small>
        </p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
);

export default ActivQuiz;