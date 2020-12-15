import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = (props) => {
  return (
    <div className={classes.Finished}>
      <h4>Results:</h4>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            "fa",
            props.results[quizItem.id] === "error" ? "fa-times" : "fa-check",
            classes[props.results[quizItem.id]],
          ];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>. &nbsp;
              {quizItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
        {/* <li>
          <strong>1. </strong> Qwestion.....
          <i className={"fa fa-times" + " " + classes.error} />
        </li>
        <li>
          <strong>2. </strong> Qwestion.....
          <i className={"fa fa-check" + " " + classes.success} />
        </li> */}
      </ul>
      <p> You wright in 4 of {props.quiz.length}</p>
      <div>
        <button>Repeat</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
