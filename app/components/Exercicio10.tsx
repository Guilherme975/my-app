'use client';

import { useState } from 'react';

export function AbaNavegacao() {
  const [abaAtiva, setAbaAtiva] = useState<number>(1);

  // Conteúdos para cada aba
  const conteudos = [
    {
      id: 1,
      titulo: 'Tab content #1',
      texto:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: 2,
      titulo: 'Tab content #2',
      texto:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.',
    },
    {
      id: 3,
      titulo: 'Tab content #3',
      texto:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
  ];

  // Obtém o conteúdo da aba selecionada
  const conteudoAtual = conteudos.find((item) => item.id === abaAtiva);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '4px',
        maxWidth: '550px',
        overflow: 'hidden',
        backgroundColor: '#fff',
      }}
    >
      {/* Bar de Abas */}
      <div
        style={{
          display: 'flex',
          backgroundColor: '#eeeeee',
          borderBottom: '1px solid #ccc',
        }}
      >
        {[1, 2, 3].map((num) => {
          const estaAtiva = abaAtiva === num;
          return (
            <button
              key={num}
              onClick={() => setAbaAtiva(num)}
              style={{
                padding: '12px 24px',
                border: 'none',
                backgroundColor: estaAtiva ? '#cccccc' : 'transparent',
                fontWeight: estaAtiva ? 'bold' : 'normal',
                color: '#333',
                cursor: 'pointer',
                fontSize: '15px',
                outline: 'none',
                transition: 'background-color 0.2s',
              }}
            >
              Tab #{num}
            </button>
          );
        })}
      </div>

      {/* Conteúdo da Aba */}
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginTop: 0, marginBottom: '12px', color: '#222' }}>
          {conteudoAtual?.titulo}
        </h3>
        <p style={{ margin: 0, color: '#555', lineHeight: '1.5', fontSize: '14px' }}>
          {conteudoAtual?.texto}
        </p>
      </div>
    </div>
  );
}