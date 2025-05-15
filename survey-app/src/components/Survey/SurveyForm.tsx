import React, { useState } from 'react';
import { useQuestions } from '../../hooks/useQuestions';
import QuestionItem from './QuestionItem';
import GenderSelect from './GenderSelect';
import '../../styles/SurveyForm.css';

const SurveyForm = () => {
  const { questions, loading, error } = useQuestions();
  const [gender, setGender] = useState('');
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswerChange = (id: number, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Género:', gender);
    console.log('Respuestas:', answers);
    alert("Encuesta enviada. ¡Gracias!");
  };

  if (loading) return <p>Cargando preguntas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="dashboard-container">
      <div className="form-card">
        <h2 className="form-title">Encuesta sobre Trabajo Remoto</h2>
        <form onSubmit={handleSubmit}>
          <GenderSelect value={gender} onChange={e => setGender(e.target.value)} />

          {questions.map(({ id, text }) => (
            <QuestionItem
              key={id}
              id={id}
              text={text}
              answer={answers[id] || ''}
              onChange={handleAnswerChange}
            />
          ))}

          <button type="submit" className="submit-button">Enviar encuesta</button>
        </form>
      </div>
    </div>
  );
};

export default SurveyForm;
