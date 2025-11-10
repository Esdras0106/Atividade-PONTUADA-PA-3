import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home-hero">
      <div className="hero-content">
        <h1>Farmácia Dois Amigos</h1>
        <p>Cuidados com você e sua família — perto de casa.</p>
        <div className="hero-ctas">
          <Link className="btn" to="/servicos">Serviços</Link>
          <Link className="btn outline" to="/contato">Fale Conosco</Link>
        </div>
      </div>
      <img src="/assets/logo.png" alt="farmácia" />
    </section>
  )
}