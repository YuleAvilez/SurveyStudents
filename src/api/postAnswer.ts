import axios from 'axios';

const BASE_URL = 'https://studentprojectapi.onrender.com';

export const postAnswer = async (questionId: number, questionDetailId: number) => {
  const response = await axios.post(`${BASE_URL}/answers`, {
    answer: {
      question_id: questionId,
      question_detail_id: questionDetailId,
    }
  });
  return response.data;
};