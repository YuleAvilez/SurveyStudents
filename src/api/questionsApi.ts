const BASE_URL = 'https://studentprojectapi.onrender.com';

export const fetchQuestions = async () => {
  const res = await fetch(`${BASE_URL}/questions`);
  if (!res.ok) throw new Error('Error al obtener preguntas');
  return res.json();
};
