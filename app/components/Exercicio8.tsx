'use client';

import { useState } from 'react';

export function SelecaoGenero() {
  const [genero, setGenero] = useState('Masculino'); // Valor inicial opcional

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
      <label style={{ fontWeight: 'bold', fontSize: '18px', color: '#0070f3', marginBottom: '4px' }}>
        Gênero
      </label>

      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        <input
          type="radio"
          name="genero"
          value="Feminino"
          checked={genero === 'Feminino'}
          onChange={(e) => setGenero(e.target.value)}
        />
        Feminino
      </label>

      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        <input
          type="radio"
          name="genero"
          value="Masculino"
          checked={genero === 'Masculino'}
          onChange={(e) => setGenero(e.target.value)}
        />
        Masculino
      </label>

      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        <input
          type="radio"
          name="genero"
          value="Outro"
          checked={genero === 'Outro'}
          onChange={(e) => setGenero(e.target.value)}
        />
        Outro
      </label>

      <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
        Selecionado: <strong>{genero}</strong>
      </p>
    </div>
  );
}