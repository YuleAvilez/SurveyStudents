import axios from 'axios';

const BASE_URL = 'https://studentprojectapi.onrender.com';

//try catch para capturar errores
export const postAnswer = async (questionId: number, questionDetailId: number) => {
  try {
  const response = await axios.post(`${BASE_URL}/answers`, {
    answer: {
      question_id: questionId,
      question_detail_id: questionDetailId,
    }
  });
  return response.data;

  }catch (error) {
    console.error('Error al enviar respuesta', error);
  }
}

