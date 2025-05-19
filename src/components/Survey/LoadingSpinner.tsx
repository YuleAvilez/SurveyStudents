// src/components/LoadingSpinner.tsx
import React from 'react';
import '../../styles/SurveyForm.css';

const LoadingSpinner = () => {
  return (
    <div className="dashboard-container">
      <div className="form-card loading-card">
        <div className="spinner" />
        <p className="loading-text">Cargando...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
