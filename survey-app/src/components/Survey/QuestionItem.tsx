import React from 'react';

interface Props {
  id: number;
  text: string;
  answer: string;
  onChange: (id: number, value: string) => void;
}

const QuestionItem = ({ id, text, answer, onChange }: Props) => {
  return (
    <div className="form-question">
      <label>{text}</label>
      <div className="radio-group">
        <input
          type="radio"
          id={`q${id}-yes`}
          name={`q${id}`}
          checked={answer === "Sí"}
          onChange={() => onChange(id, "Sí")}
        />
        <label htmlFor={`q${id}-yes`}>Sí</label>

        <input
          type="radio"
          id={`q${id}-no`}
          name={`q${id}`}
          checked={answer === "No"}
          onChange={() => onChange(id, "No")}
        />
        <label htmlFor={`q${id}-no`}>No</label>
      </div>
    </div>
  );
};

export default QuestionItem;
