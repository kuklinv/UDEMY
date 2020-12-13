import React from 'react';
import classes from './ActivQuiz.module.css';
import AnswersList from "./AnswersList/AnswerList";

const ActivQuiz = props => (
    <div className={classes.ActivQuis}>
        <p className={classes.Question}>
            <span>
                <strong>{props.questionId}</strong>&nbsp;
                {props.question}
           </span>
            <small>{props.questionId} of {props.numberOfQuiz}</small>
        </p>
        <AnswersList
            answers={props.answers}
            selectQuizAnswer={props.selectQuizAnswer}
            answerState={props.answerState}
        />
    </div>
);

export default ActivQuiz;