const BASE_URL = 'https://studentprojectapi.onrender.com';

export const fetchQuestionsDetails = async () => {
  try {
    const res = await fetch(`${BASE_URL}/question_details`);
    if (!res.ok) throw new Error('Error al obtener preguntas');
    return await res.json();
  } catch (error) {
    console.error('Error al obtener preguntas', error);
    throw new Error('Error al obtener preguntas');
  }
};
