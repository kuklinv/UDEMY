import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActivQuiz from "../../components/ActivQuiz/ActivQuiz";

class Quiz extends Component {
    state = {
        quiz: [
            {
                questionId: 1,
                question: 'what color is the sky?',
                answers: [
                    {text: 'Red', id: 1},
                    {text: 'Yellow', id: 2},
                    {text: 'Blue', id: 3},
                    {text: 'Black', id: 4},
                ],
                wrightAnswerId: 3
            }
        ]
    };

    selectQuizAnswerHandler = (answerId) =>{
        console.log('you select:', answerId);
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h2>Answer all questions</h2>
                    <ActivQuiz
                        questionId={this.state.quiz[0].questionId}
                        question={this.state.quiz[0].question}
                        answers={this.state.quiz[0].answers}
                        numberOfQuiz={this.state.quiz.length}
                        selectQuizAnswer={this.selectQuizAnswerHandler()}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;