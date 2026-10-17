'use client';

import { useState } from 'react';

// ==========================================
// EXERCÍCIO 1: Componente com estado próprio
// ==========================================
export function BotaoOnOffSelf() {
  const [ligado, setLigado] = useState(false);

  return (
    <button
      onClick={() => setLigado(!ligado)}
      style={{
        backgroundColor: ligado ? 'green' : 'red',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
      }}
    >
      {ligado ? 'Ligado' : 'Desligado'}
    </button>
  );
}

// ==========================================
// EXERCÍCIO 2: Componente que recebe Props
// ==========================================

// Definindo os tipos das Props com TypeScript
interface BotaoOnOffProps {
  ligado: boolean;
  onToggle: () => void;
}

export function BotaoOnOffProps({ ligado, onToggle }: BotaoOnOffProps) {
  return (
    <button
      onClick={onToggle}
      style={{
        backgroundColor: ligado ? 'green' : 'red',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
      }}
    >
      {ligado ? 'Ligado' : 'Desligado'}
    </button>
  );
}