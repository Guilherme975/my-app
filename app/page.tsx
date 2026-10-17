'use client';

import { useState } from 'react';

// Importando todos os componentes
import { BotaoOnOffSelf, BotaoOnOffProps } from './components/Exercicios';
import { ValidacaoNome } from './components/Exercicio3';
import { ValidacaoSenha } from './components/Exercicio4';
import { ValidacaoSenhaUseEffect } from './components/Exercicio5';
import { ValidacaoSenhaRender } from './components/Exercicio6';
import { InverterTexto } from './components/Exercicio7';
import { SelecaoGenero } from './components/Exercicio8';
import { SelecaoFrutas } from './components/Exercicio9';
import { AbaNavegacao } from './components/Exercicio10';

export default function Home() {
  const [estadoEx2, setEstadoEx2] = useState(false);

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Lista de Exercícios TypeScript / Next.js</h1>

      {/* --- EXERCÍCIO 1 --- */}
      <section style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <h2>Exercício 1: Estado Interno</h2>
        <p>O próprio componente gerencia seu estado de ON/OFF.</p>
        <BotaoOnOffSelf />
      </section>

      {/* --- EXERCÍCIO 2 --- */}
      <section style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <h2>Exercício 2: Estado na Página (Props e Evento)</h2>
        <p>O estado está na página principal e é passado via props.</p>
        <BotaoOnOffProps
          ligado={estadoEx2}
          onToggle={() => setEstadoEx2(!estadoEx2)}
        />
        <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
          Status capturado na página principal: <strong>{estadoEx2 ? 'Ativo' : 'Inativo'}</strong>
        </p>
      </section>

      {/* --- EXERCÍCIO 3 --- */}
      <section style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <h2>Exercício 3: Validação do Campo de Nome</h2>
        <p>Validação com mensagens de erro (vermelho) ou sucesso (verde).</p>
        <ValidacaoNome />
      </section>

      {/* --- EXERCÍCIO 4 --- */}
      <section style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <h2>Exercício 4: Validação de Confirmação de Senha (com Botão)</h2>
        <p>Verifica se a senha e a confirmação coincidem ao clicar em enviar.</p>
        <ValidacaoSenha />
      </section>

      {/* --- EXERCÍCIO 5 --- */}
      <section style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <h2>Exercício 5: Validação com useEffect</h2>
        <p>Validação automática em tempo real conforme os campos mudam.</p>
        <ValidacaoSenhaUseEffect />
      </section>

      {/* --- EXERCÍCIO 6 --- */}
      <section style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <h2>Exercício 6: Validação Direta no Re-render</h2>
        <p>Validação calculada diretamente no corpo do componente a cada digitação.</p>
        <ValidacaoSenhaRender />
      </section>

      {/* --- EXERCÍCIO 7 --- */}
      <section style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <h2>Exercício 7: Inverter Texto</h2>
        <p>Campo de texto com botão para inverter os caracteres.</p>
        <InverterTexto />
      </section>

      {/* --- EXERCÍCIO 8 --- */}
      <section style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <h2>Exercício 8: Seleção de Gênero (Radio Buttons)</h2>
        <p>Interface com botões de rádio para escolher o gênero em português.</p>
        <SelecaoGenero />
      </section>

      {/* --- EXERCÍCIO 9 --- */}
      <section style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <h2>Exercício 9: Seleção de Frutas (Select / Optgroup)</h2>
        <p>Campo de seleção agrupado com as frutas indicadas na imagem.</p>
        <SelecaoFrutas />
      </section>

      {/* --- EXERCÍCIO 10 --- */}
      <section style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <h2>Exercício 10: Interface de Abas (Tabs)</h2>
        <p>Navegação por abas com alteração dinâmica de conteúdo.</p>
        <AbaNavegacao />
      </section>

    </main>
  );
}