import React from 'react';
import './SurveyForm.css';

const SurveyForm = () => {
  return (
    <div className="dashboard-container">
      <div className="form-card">
        <h2 className="form-title">Encuesta sobre Trabajo Remoto</h2>
        <form>
          <div className="form-group">
            <label>Género:</label>
            <select>
              <option>Hombre</option>
              <option>Mujer</option>
            </select>
          </div>

          {[
            "¿Prefieres trabajar de forma remota?",
            "¿Crees que el trabajo remoto mejora la productividad?",
            "¿Te resulta fácil concentrarte en casa?",
            "¿Participas en reuniones virtuales diariamente?",
            "¿Recomendarías el trabajo remoto a otras personas?"
          ].map((question, idx) => (
            <div key={idx} className="form-question">
              <label>{question}</label>
              <div className="radio-group">
                <input type="radio" id={`q0-yes`} name={`q0`} />
                <label htmlFor={`q0-yes`}>Sí</label>

                <input type="radio" id={`q0-no`} name={`q0`} />
                <label htmlFor={`q0-no`}>No</label>
              </div>
            </div>
          ))}

          <button type="submit" className="submit-button">Enviar encuesta</button>
        </form>
      </div>
    </div>
  );
};

export default SurveyForm;
