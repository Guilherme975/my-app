'use client';

import { useState } from 'react';

export function InverterTexto() {
  const [texto, setTexto] = useState('');

  const handleInverter = () => {
    // Inverte a string convertendo para array, invertendo e juntando novamente
    const textoInvertido = texto.split('').reverse().join('');
    setTexto(textoInvertido);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <div>
        <label htmlFor="texto-ex7" style={{ display: 'block', marginBottom: '5px' }}>
          Digite um texto:
        </label>
        <input
          id="texto-ex7"
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Ex: TypeScript"
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '100%',
          }}
        />
      </div>

      <button
        onClick={handleInverter}
        style={{
          padding: '8px 16px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Inverter Texto
      </button>
    </div>
  );
}