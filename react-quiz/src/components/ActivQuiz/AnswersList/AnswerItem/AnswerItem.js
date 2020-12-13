import React from "react";
import classes from './AnswerItem.module.css';

const AnswerItem = props => {

    const answerStateColor = [classes.AnswerItem];

    if (props.answerState) {
        answerStateColor.push(classes[props.answerState])
    }

    return (
        <li className={answerStateColor.join(' ')}
            onClick={() => props.selectQuizAnswer(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}


export default AnswerItem;