import React from "react";

export const QuziList = ({ question, options, handleClick, currentAnswer }) => {
  return (
    <div>
      <h1>{question}</h1>

      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleClick(option)}
            className={currentAnswer === option ? "selected" : " "}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
