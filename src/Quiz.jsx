import React, { useState } from "react";
import "./Quiz.css";
import { QuziList } from "./Components/QuziList";
const Quiz = () => {
  const questions = [
    {
      question: "What is the significance of the `key` prop in React?",
      option: [
        "To identify unique elements in a list",
        "To trigger re-renders",
        "To bind data to components",
        "To initialize state",
      ],
      answer: "To identify unique elements in a list",
    },
    {
      question: "What is the purpose of `useReducer` in React?",
      option: [
        "To handle side effects",
        "To fetch data from APIs",
        "To manage more complex state logic",
        "To navigate between components",
      ],
      answer: "To manage more complex state logic",
    },
    {
      question: "What does React's Context API solve?",
      option: [
        "Prop drilling",
        "State management",
        "Event handling",
        "Performance optimization",
      ],
      answer: "Prop drilling",
    },
    {
      question: "What does `React.memo` do?",
      option: [
        "Prevents unnecessary re-renders of a component",
        "Caches the component in the DOM",
        "Handles error boundaries",
        "Improves server-side rendering",
      ],
      answer: "Prevents unnecessary re-renders of a component",
    },
    {
      question:
        "What is the difference between `useEffect` and `useLayoutEffect`?",
      option: [
        "useEffect is synchronous; useLayoutEffect is asynchronous",
        "useLayoutEffect runs after rendering; useEffect runs before rendering",
        "useLayoutEffect runs synchronously after DOM mutations; useEffect runs asynchronously after rendering",
        "Both are identical in functionality",
      ],
      answer:
        "useLayoutEffect runs synchronously after DOM mutations; useEffect runs asynchronously after rendering",
    },
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);

  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <>
          <h2>Build a Quiz 🎯</h2>

          <QuziList
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].option}
            handleClick={handleClick}
            currentAnswer={currentAnswer}
          />
          <button
            disabled={currentAnswer === null}
            className={currentAnswer === null ? "button-disable" : "button"}
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </>
      ) : (
        <>
          You'r Score is {score}/5
          <div className="score">{score == 0 ? "😥" : "🤩"}</div>
        </>
      )}
    </div>
  );
};

export default Quiz;
