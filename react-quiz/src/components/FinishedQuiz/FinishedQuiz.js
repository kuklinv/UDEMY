import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }
    return total;
  }, 0);
  return (
    <div className={classes.Finished}>
      <h4>Results:</h4>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            "fa",
            props.results[quizItem.questionId] === "error"
              ? "fa-times"
              : "fa-check",
            classes[props.results[quizItem.questionId]], //
          ];

          return (
            <li key={index}>
              <strong>{index + 1}</strong>. &nbsp;
              {quizItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
      </ul>
      <p>
        {" "}
        You wright in {successCount} of {props.quiz.length}
      </p>
      <div>
        <button onClick={props.RetryQuiz}>Repeat</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
