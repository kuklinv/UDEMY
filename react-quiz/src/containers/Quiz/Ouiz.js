import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActivQuiz from "../../components/ActivQuiz/ActivQuiz";

class Quiz extends Component {
    state = {
        activQuestion: 0,
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
            },
            {
                questionId: 2,
                question: 'what year is it?',
                answers: [
                    {text: '2020', id: 1},
                    {text: '1972', id: 2},
                    {text: '2024', id: 3},
                    {text: '1812', id: 4},
                ],
                wrightAnswerId: 1
            }
        ]
    };

    selectQuizAnswerHandler = (answerId) =>{
        console.log('you select:', answerId);
    }

    chengToNextQuestion = () => {
        this.setState({
            activQuestion: this.state.activQuestion + 1
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h2>Answer all questions</h2>
                    <ActivQuiz
                        questionId={this.state.quiz[this.state.activQuestion].questionId}
                        question={this.state.quiz[this.state.activQuestion].question}
                        answers={this.state.quiz[this.state.activQuestion].answers}
                        numberOfQuiz={this.state.quiz.length}
                        selectQuizAnswer={this.selectQuizAnswerHandler}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;