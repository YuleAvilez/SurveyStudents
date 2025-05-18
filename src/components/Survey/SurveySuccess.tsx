// src/components/Survey/SurveySuccess.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react'; 

const SurveySuccess = ({ onRestart }: { onRestart: () => void }) => {
  return (
    <div className="success-container">
      <div className="form-card success-card">
        <CheckCircle size={64} color="#00e676" />
        <h2 className="success-title">¡Encuesta enviada!</h2>
        <p className="success-message">Gracias por tu participación.</p>
      </div>
    </div>
  );
};

export default SurveySuccess;
