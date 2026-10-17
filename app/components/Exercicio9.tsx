'use client';

import { useState } from 'react';

export function SelecaoFrutas() {
  const [fruta, setFruta] = useState('Blueberry'); // Valor inicial selecionado por defeito

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
      <label htmlFor="select-frutas" style={{ fontWeight: 'bold', fontSize: '16px' }}>
        Selecione uma fruta:
      </label>

      <select
        id="select-frutas"
        value={fruta}
        onChange={(e) => setFruta(e.target.value)}
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '16px',
          backgroundColor: 'white',
          cursor: 'pointer',
        }}
      >
        <optgroup label="Fruits">
          <option value="Apple">Apple</option>
          <option value="Banana">Banana</option>
          <option value="Blueberry">Blueberry</option>
          <option value="Grapes">Grapes</option>
          <option value="Pineapple">Pineapple</option>
        </optgroup>
      </select>

      <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
        Fruta selecionada: <strong>{fruta}</strong>
      </p>
    </div>
  );
}