// Local do arquivo: /app/page.tsx

import React from 'react';
// Ajuste os caminhos dos imports para apontar para a sua pasta de componentes.
// Se sua pasta 'components' está na raiz do projeto, o caminho abaixo deve funcionar.
import Header from '../components/Header';
import HomeScreen from '../components/HomeScreen';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection'; // Mantido o alias se estiver configurado

export default function HomePage() {
  // Define uma cor de destaque padrão para a AboutSection.
  // Você pode escolher um dos seus tons de roxo aqui, por exemplo:
  const defaultAccentColor = "#a78bfa"; // Um roxo claro vibrante

  return (
    <div className="App">
      <Header />
      <main>
        <HomeScreen />

        <AboutSection currentAccent={defaultAccentColor} />
        <SkillsSection />
        <ProjectsSection />
      </main>

    </div>
  );
}