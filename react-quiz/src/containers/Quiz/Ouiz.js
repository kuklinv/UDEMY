import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActivQuiz from "../../components/ActivQuiz/ActivQuiz";

class Quiz extends Component {
    state = {
        activQuestion: 0,
        answerState: null,
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

    chengToNextQuestion = () => {
        this.setState({
            activQuestion: this.state.activQuestion + 1,
            answerState: null
        })
    }

    quizFinished = () => {
        return this.state.activQuestion + 1 === this.state.quiz.length;
    }

    selectQuizAnswerHandler = (answerId) => {
        console.log('you select:', answerId);

        const qwestion = this.state.quiz[this.state.activQuestion];

        if (qwestion.wrightAnswerId === answerId) {

            // this.state.answerState = {[answerId]: 'success'}
            this.setState({answerState: {[answerId]: 'success'}})

            const timeOut = window.setTimeout(() => {

                if (this.quizFinished()) {
                    console.log('quize finished');
                } else {
                    console.log('you right, next question');
                    this.chengToNextQuestion();
                }

                window.clearTimeout(timeOut);
            }, 1000)


        } else {
            // this.state.answerState = {[answerId]: 'error'}
            this.setState({answerState: {[answerId]: 'error'}}
                )
            console.log('you wrong, think about it....')
        }

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
                        answerState={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;