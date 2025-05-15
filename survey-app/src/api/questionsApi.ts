const BASE_URL = 'https://studentprojectapi.onrender.com'; // cambia al endpoint real

export const fetchQuestions = async () => {
  // Suponiendo que la API te devuelve un array de preguntas en texto
  const res = await fetch(`${BASE_URL}/questions`);
  if (!res.ok) throw new Error('Error al obtener preguntas');
  return res.json(); // [{ id: 1, text: "¿Prefieres trabajar de forma remota?" }, ...]
};
