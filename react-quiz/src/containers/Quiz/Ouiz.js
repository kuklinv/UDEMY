import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActivQuiz from "../../components/ActivQuiz/ActivQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    results: {}, // {[key]: success || error}
    quizFinished: false,
    activQuestion: 0,
    answerState: null,
    activeHeader: "Welcome to Quiz app",
    startFinishedHeader: "Answer all questions",
    quiz: [
      {
        questionId: 1,
        question: "what color is the sky?",
        answers: [
          { text: "Red", id: 1 },
          { text: "Yellow", id: 2 },
          { text: "Blue", id: 3 },
          { text: "Black", id: 4 },
        ],
        wrightAnswerId: 3,
      },
      {
        questionId: 2,
        question: "what year is it?",
        answers: [
          { text: "2020", id: 1 },
          { text: "1972", id: 2 },
          { text: "2024", id: 3 },
          { text: "1812", id: 4 },
        ],
        wrightAnswerId: 1,
      },
    ],
  };

  chengToNextQuestion = () => {
    this.setState({
      activQuestion: this.state.activQuestion + 1,
      answerState: null,
    });
  };

  quizFinished = () => {
    return this.state.activQuestion + 1 === this.state.quiz.length;
  };

  selectQuizAnswerHandler = (answerId) => {
    // wait change quiz when we have a right answer, for not finished quiz with double click wright button
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    //refactoring SetTimeOut
    // const refactorSetTimeout = function() {
    //   const timeOut = window.setTimeout(() => {
    //     // TODO: move to another function
    //     if (this.call.quizFinished()) {
    //       this.setState({
    //         quizFinished: true,
    //         activeHeader: "Eazy-peazy",
    //         startFinishedHeader: "You answered all question's",
    //       });
    //     } else {
    //       console.log("next question");
    //       this.chengToNextQuestion();
    //     }

    //     window.clearTimeout(timeOut);
    //   }, 1000);
    // };
    ///

    console.log("you select:", answerId);

    const qwestion = this.state.quiz[this.state.activQuestion];

    const results = this.state.results;

    if (qwestion.wrightAnswerId === answerId) {
      if (!results[qwestion.id]) {
        results[qwestion.id] = "success"; // TODO: ? for what?
      }

      // this.state.answerState = {[answerId]: 'success'}
      this.setState({
        answerState: { [answerId]: "success" },
        results: results,
      });
      console.log("you wright");

      // refactorSetTimeout();
      const timeOut = window.setTimeout(() => {
        // TODO: move to another function
        if (this.quizFinished()) {
          this.setState({
            quizFinished: true,
            activeHeader: "Eazy-peazy",
            startFinishedHeader: "You answered all question's",
          });
        } else {
          console.log("next question");
          this.chengToNextQuestion();
        }

        window.clearTimeout(timeOut);
      }, 1000);
    } else {
      // this.state.answerState = {[answerId]: 'error'}
      results[qwestion.id] = "error";
      this.setState({ answerState: { [answerId]: "error" }, results: results });
      console.log("you wrong, think about it....");

      const timeOut = window.setTimeout(() => {
        if (this.quizFinished()) {
          this.setState({
            quizFinished: true,
            activeHeader: "Eazy-peazy",
            startFinishedHeader: "You answered all question's",
          });
        } else {
          console.log("next question");
          this.chengToNextQuestion();
        }

        window.clearTimeout(timeOut);
      }, 1000);
    }
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>{this.state.activeHeader}</h1>
          <h2>{this.state.startFinishedHeader}</h2>

          {this.state.quizFinished === true ? (
            <FinishedQuiz results={this.state.results} quiz={this.state.quiz} />
          ) : (
            <ActivQuiz
              questionId={this.state.quiz[this.state.activQuestion].questionId}
              question={this.state.quiz[this.state.activQuestion].question}
              answers={this.state.quiz[this.state.activQuestion].answers}
              numberOfQuiz={this.state.quiz.length}
              selectQuizAnswer={this.selectQuizAnswerHandler}
              answerState={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
