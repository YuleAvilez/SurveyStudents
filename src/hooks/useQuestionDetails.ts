import { useState, useEffect } from 'react';
import { fetchQuestionsDetails } from '../api/questionsDetails';

export const useQuestionDetails = () => {
  const [details, setDetails] = useState<{ id: number, question_id: number, option_text: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuestionsDetails()
      .then(data => {
        setDetails(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { details, loading, error };
};
