// src/components/Survey/QuestionItem.tsx

import React from 'react';
import '../../styles/QuestionItem.css'; // Asegúrate de tener el estilo como el diseño 2

interface QuestionItemProps {
  id: number;
  text: string;
  answer: string;
  options: string[];
  onChange: (id: number, value: string) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ id, text, answer, options, onChange }) => {
  return (
    <div className="question-item">
      <label className="question-text">{text}</label>
      <div className="options-group">
        {options.map((option, index) => (
          <label key={index} className="radio-option">
            <input
              type="radio"
              name={`question-${id}`}
              value={option}
              checked={answer === option}
              onChange={() => onChange(id, option)}
            />
            <span className="custom-radio"></span>
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionItem;
