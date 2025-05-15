import React from 'react';

interface QuestionItemProps {
  id: number;
  text: string;
  answer: string;
  onChange: (id: number, value: string) => void;
  options: string[]; // <- NUEVO
}

const QuestionItem = ({ id, text, answer, onChange, options }: QuestionItemProps) => {
  return (
    <div className="question-item">
      <label className="question-label">{text}</label>
      <select
        className="question-select"
        value={answer}
        onChange={(e) => onChange(id, e.target.value)}
      >
        <option value="">Selecciona una opción</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default QuestionItem;
