'use client';

import { useState, useEffect } from 'react';

export function ValidacaoSenhaUseEffect() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState<{ texto: string; sucesso: boolean } | null>(null);

  // Validação automática disparada sempre que 'senha' ou 'confirmarSenha' mudam
  useEffect(() => {
    // Se ambos estiverem vazios, limpa a mensagem
    if (senha === '' && confirmarSenha === '') {
      setMensagem(null);
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
  }, [senha, confirmarSenha]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '300px' }}>
      <div>
        <label htmlFor="senha-ex5" style={{ display: 'block', marginBottom: '5px' }}>
          Senha:
        </label>
        <input
          id="senha-ex5"
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
        <label htmlFor="confirmarSenha-ex5" style={{ display: 'block', marginBottom: '5px' }}>
          Confirmar Senha:
        </label>
        <input
          id="confirmarSenha-ex5"
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