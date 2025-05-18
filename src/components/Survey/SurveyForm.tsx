import React, { useState, useEffect } from 'react';
import { useQuestions } from '../../hooks/useQuestions';
import { useQuestionDetails } from '../../hooks/useQuestionDetails';
import QuestionItem from './QuestionItem';
import { postAnswer } from '../../api/postAnswer';
import LoadingSpinner from './LoadingSpinner';
import SurveySuccess from './SurveySuccess';
import '../../styles/SurveyForm.css';
import { toast } from 'react-toastify';

const SurveyForm = () => {
  const { questions, loading, error } = useQuestions();
  const { details, loading: detailsLoading, error: detailsError } = useQuestionDetails();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Revisamos si ya se envio, por eso el useEffect :3
  useEffect(() => {
    const wasSubmitted = localStorage.getItem('survey_submitted');
    if (wasSubmitted === 'true') {
      setSubmitted(true);
    }
  }, []);

  const handleAnswerChange = (id: number, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const unanswered = questions.filter(q => !answers[q.id]);
    if (unanswered.length > 0) {
      toast.error('Por favor responde todas las preguntas antes de enviar.');
      return;
    }

    try {
      for (const [questionIdStr, detailIdStr] of Object.entries(answers)) {
        const questionId = parseInt(questionIdStr, 10);
        const detailId = parseInt(detailIdStr, 10);
        await postAnswer(questionId, detailId);
      }

      localStorage.setItem('survey_submitted', 'true'); // <- Guardo variable en el local storage, comments para entender el codigo 
      toast.success('¡Encuesta enviada con éxito!');
      setSubmitted(true);
    } catch (error) {
      console.error('Error al enviar respuestas', error);
      toast.error('Ocurrió un error al enviar la encuesta.');
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setSubmitted(false);
    localStorage.removeItem('survey_submitted'); 
  };

  if (loading || detailsLoading) return <LoadingSpinner />;
  if (error || detailsError) return <p>Error: {error || detailsError}</p>;
  if (submitted) return <SurveySuccess onRestart={handleRestart} />;

  return (
    <div className="dashboard-container">
      <div className="form-card">
        <h2 className="form-title">Encuesta Sobre Hábitos De Estudio</h2>

        <form onSubmit={handleSubmit}>
          {questions.map(({ id, text }) => {
            const options = details
              .filter(detail => detail.question_id === id)
              .map(detail => ({ id: detail.id, text: detail.option_text }));

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
console.log("Hola, soy el SurveyForm.tsx"); // pruebas de commit
// pruebas de commit

export default SurveyForm;
