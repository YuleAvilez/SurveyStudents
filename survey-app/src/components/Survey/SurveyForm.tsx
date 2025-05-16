import React, { useState } from 'react';
import { useQuestions } from '../../hooks/useQuestions';
import { useQuestionDetails } from '../../hooks/useQuestionDetails';
import QuestionItem from './QuestionItem';
import LoadingSpinner from './LoadingSpinner';
import SurveySuccess from './SurveySuccess';
import '../../styles/SurveyForm.css';

const SurveyForm = () => {
  const { questions, loading, error } = useQuestions();
  const { details, loading: detailsLoading, error: detailsError } = useQuestionDetails();
  const [gender, setGender] = useState('');
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);


  const handleAnswerChange = (id: number, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Género:', gender);
    console.log('Respuestas:', answers);
    setSubmitted(true); 
  };

  const handleRestart = () => {
    setAnswers({});
    setGender('');
    setSubmitted(false); 
  };

  if (loading || detailsLoading) return <LoadingSpinner />;
  if (error || detailsError) return <p>Error: {error || detailsError}</p>;
  if (submitted) return <SurveySuccess onRestart={handleRestart} />;

  return (
    <div className="dashboard-container">
      <div className="form-card">
        <h2 className="form-title">Encuesta Sobre Habitos De Estudio</h2>
        <form onSubmit={handleSubmit}>

            {questions.map(({ id, text }) => {
              const options = details
                .filter(detail => detail.question_id === id)
                .map(detail => detail.option_text);

              return (
                <QuestionItem
                  key={id}
                  id={id}
                  text={text}
                  answer={answers[id] || ''}
                  onChange={handleAnswerChange}
                  options={options}
                />
              );
            })}

          <button type="submit" className="submit-button">Enviar encuesta</button>
        </form>
      </div>
    </div>
  );
};


export default SurveyForm;
