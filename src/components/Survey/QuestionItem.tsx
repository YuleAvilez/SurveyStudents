import React from 'react';
import '../../styles/QuestionItem.css';

interface QuestionItemProps {
  id: number;
  text: string;
  answer: string;
  onChange: (id: number, value: string) => void;
  options: { id: number; text: string }[];
}

const QuestionItem = ({ id, text, answer, onChange, options }: QuestionItemProps) => {
  return (
    <div className="question-item">
      <p className="question-text">{text}</p>
      <div className="options-group">
        {options.map(opt => (
          <label key={opt.id} className="radio-option">
            <input
              type="radio"
              name={`question-${id}`}
              value={opt.id.toString()}
              checked={answer === opt.id.toString()}
              onChange={() => onChange(id, opt.id.toString())}
            />
            {opt.text}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionItem;
