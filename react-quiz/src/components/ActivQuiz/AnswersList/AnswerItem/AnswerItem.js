import React from "react";
import classes from './AnswerItem.module.css';

const AnswerItem = props => {

    const answerStateColor = ['forSuccess', 'forError'];

    if (props.answerState) {
        props.answerState === 'success' ?
    }

    return (
        <li className={classes.AnswerItem}
            onClick={() => props.selectQuizAnswer(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}


export default AnswerItem;