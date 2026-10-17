'use client';

import { useState } from 'react';

export function ValidacaoNome() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState<{ texto: string; sucesso: boolean } | null>(null);

  const handleValidar = (e: React.FormEvent) => {
    e.preventDefault();

    if (nome.length < 2) {
      setMensagem({
        texto: 'O nome precisa ter pelo menos 2 caracteres',
        sucesso: false,
      });
    } else if (nome.length > 20) {
      setMensagem({
        texto: 'O nome precisa ter até 20 caracteres',
        sucesso: false,
      });
    } else {
      setMensagem({
        texto: 'Formulário enviado com sucesso',
        sucesso: true,
      });
    }
  };

  return (
    <form onSubmit={handleValidar} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <div>
        <label htmlFor="nome" style={{ display: 'block', marginBottom: '5px' }}>
          Nome:
        </label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '100%',
          }}
        />
      </div>

      <button
        type="submit"
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
        Enviar
      </button>

      {mensagem && (
        <p
          style={{
            color: mensagem.sucesso ? 'green' : 'red',
            fontWeight: 'bold',
            marginTop: '5px',
          }}
        >
          {mensagem.texto}
        </p>
      )}
    </form>
  );
}