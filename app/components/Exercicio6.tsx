'use client';

import { useState } from 'react';

export function ValidacaoSenhaRender() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // Cálculo da validação feito diretamente a cada render
  let mensagem = null;

  if (senha !== '' || confirmarSenha !== '') {
    if (senha === confirmarSenha) {
      mensagem = {
        texto: 'Formulário enviado com sucesso',
        sucesso: true,
      };
    } else {
      mensagem = {
        texto: 'As senhas precisam ser iguais',
        sucesso: false,
      };
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '300px' }}>
      <div>
        <label htmlFor="senha-ex6" style={{ display: 'block', marginBottom: '5px' }}>
          Senha:
        </label>
        <input
          id="senha-ex6"
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
        <label htmlFor="confirmarSenha-ex6" style={{ display: 'block', marginBottom: '5px' }}>
          Confirmar Senha:
        </label>
        <input
          id="confirmarSenha-ex6"
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
    </div>
  );
}