import React from 'react'


export default function SobreNos() {
  return (
    <section>
      <h2>Sobre nós</h2>
      <div className="about-grid">
        <div>
          <h3>Missão</h3>
          <p>Prover saúde e bem-estar com atendimento humano e profissional.</p>
          <h3>Visão</h3>
          <p>Ser referência na comunidade pela qualidade e confiança.</p>
          <h3>Valores</h3>
          <p>Ética, responsabilidade e cuidado com o paciente.</p>
        </div>
        <div>
          <h3>História</h3>
          <p>Atendendo a comunidade local há mais de 20 anos.</p>
          <h3>Horário de Funcionamento</h3>
          <ul>
            <li>Seg-Sex: 08:00 - 20:00</li>
            <li>Sábado: 08:00 - 14:00</li>
            <li>Domingo: Fechado</li>
          </ul>
        </div>
      </div>
    </section>
  )
}