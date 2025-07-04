// Local do arquivo: /app/page.tsx

import React from 'react';
// Ajuste os caminhos dos imports para apontar para a sua pasta de componentes.
// Se sua pasta 'components' está na raiz do projeto, o caminho abaixo deve funcionar.
import Header from '../components/Header';
import HomeScreen from '../components/HomeScreen';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';


export default function HomePage() {
  return (

    <div className="App">
      <Header />
      <main>
        <HomeScreen />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
 
    </div>
  );
}
