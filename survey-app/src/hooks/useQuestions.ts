import { useState, useEffect } from 'react';
import { fetchQuestions } from '../api/questionsApi';

export const useQuestions = () => {
  const [questions, setQuestions] = useState<{id: number, text: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuestions()
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { questions, loading, error };
};
