import React from 'react';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const GenderSelect = ({ value, onChange }: Props) => {
  return (
    <div className="form-group">
      <label>Género:</label>
      <select value={value} onChange={onChange}>
        <option value="">Selecciona</option>
        <option value="Hombre">Hombre</option>
        <option value="Mujer">Mujer</option>
      </select>
    </div>
  );
};

export default GenderSelect;
