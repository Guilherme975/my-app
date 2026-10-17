'use client';

import { useState } from 'react';

export function ValidacaoSenha() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState<{ texto: string; sucesso: boolean } | null>(null);

  const handleValidar = (e: React.FormEvent) => {
    e.preventDefault();

    if (senha === '' && confirmarSenha === '') {
      setMensagem({
        texto: 'As senhas não podem estar vazias',
        sucesso: false,
      });
      return;
    }

    if (senha === confirmarSenha) {
      setMensagem({
        texto: 'Formulário enviado com sucesso',
        sucesso: true,
      });
    } else {
      setMensagem({
        texto: 'As senhas precisam ser iguais',
        sucesso: false,
      });
    }
  };

  return (
    <form onSubmit={handleValidar} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '300px' }}>
      <div>
        <label htmlFor="senha" style={{ display: 'block', marginBottom: '5px' }}>
          Senha:
        </label>
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '100%',
          }}
        />
      </div>

      <div>
        <label htmlFor="confirmarSenha" style={{ display: 'block', marginBottom: '5px' }}>
          Confirmar Senha:
        </label>
        <input
          id="confirmarSenha"
          type="password"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          placeholder="Confirme sua senha"
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