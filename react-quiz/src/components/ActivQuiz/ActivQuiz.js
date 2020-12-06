import React from 'react';
import classes from './ActivQuiz.module.css';
import AnswersList from "./AnswersList/AnswerList";

const ActivQuiz = props => (
    <div className={classes.ActivQuis}>
        <p className={classes.Question}>
            <span>
                <strong>1.</strong>&nbsp;
                How are you doing?
           </span>
            <small>4 of 12</small>
        </p>
        <AnswersList answers={props.answers}/>
    </div>
);

export default ActivQuiz;