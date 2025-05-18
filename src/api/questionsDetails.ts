const BASE_URL = 'https://studentprojectapi.onrender.com';

export const fetchQuestionsDetails = async () => {
  const res = await fetch(`${BASE_URL}/question_details`);
  if (!res.ok) throw new Error('Error al obtener las respuestas');
  return res.json();
};
