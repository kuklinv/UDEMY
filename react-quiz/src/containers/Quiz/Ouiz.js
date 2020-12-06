import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActivQuiz from "../../components/ActivQuiz/ActivQuiz";

class Quiz extends Component {
    state = {
        quiz: []
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h2>Quiz working</h2>
                    <ActivQuiz/>
                </div>
            </div>
        )
    }
}

export default Quiz;