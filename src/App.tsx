import React from 'react';
import SurveyForm from './components/Survey/SurveyForm';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <SurveyForm />
     <ToastContainer position="bottom-right"  autoClose={3000} />
    </>
  );
};

export default App;
