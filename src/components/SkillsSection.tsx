// src/components/SkillsSection.js
import React from 'react';

const SkillsSection = () => {
  const technicalSkills = [
    { category: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "React Native", "Next.js", "Tailwind CSS"] },
    { category: "Backend", skills: ["Node.js", "NestJS", "PHP"] },
    { category: "Banco de Dados", skills: ["MySQL", "PostgreSQL",] },
    { category: "Ferramentas", skills: ["Git", "GitHub", "Figma", "VSCode"] }
  ];

  const experience = [
    {
      title: "Curso Técnico em Informática",
      institution: "Escola Técnica de Ceilândia",
      period: "Concluído",
      description: "Formação técnica com foco em desenvolvimento web e programação."
    },
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "IESB Oeste",
      period: "4º semestre em andamento",
      description: "Graduação com ênfase em engenharia de software e arquitetura de sistemas."
    },
    {
      title: "Estagiário de TI",
      institution: "Censipam",
      period: "2025 - Presente",
      description: "Desenvolvimento e manutenção de sistemas para proteção da Amazônia."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#f8fdff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a192f]">
            Minhas <span className="text-[#57e9f8]">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-[#57e9f8] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tecnologias e conhecimentos que aplico para criar soluções inovadoras
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Card de Habilidades Técnicas */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-[#e0f7fa]">
            <div className="flex items-center mb-8">
              <div className="bg-[#57e9f8] p-2 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0a192f]">Conhecimentos Técnicos</h3>
            </div>
            
            <div className="space-y-8">
              {technicalSkills.map((category, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-xl font-semibold mb-4 text-[#0a192f] flex items-center">
                    <span className="w-3 h-3 bg-[#57e9f8] rounded-full mr-3"></span>
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-4 py-2 bg-[#e6fdfe] text-[#0a192f] rounded-full flex items-center shadow-sm transition-all hover:bg-[#57e9f8] hover:text-white"
                      >
                        <div className="w-2 h-2 bg-[#57e9f8] rounded-full mr-2"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card de Educação e Experiência */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-[#e0f7fa]">
            <div className="flex items-center mb-8">
              <div className="bg-[#57e9f8] p-2 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0a192f]">Educação & Experiência</h3>
            </div>
            
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8 mb-6">
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[#57e9f8]"></div>
                  <h4 className="text-xl font-bold text-[#0a192f] mb-2">{item.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#e6fdfe] text-[#0a192f] rounded-full text-sm">
                      {item.institution}
                    </span>
                    <span className="px-3 py-1 bg-[#e6fdfe] text-[#0a192f] rounded-full text-sm">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
              
              {/* Box de Filosofia */}
              <div className="bg-gradient-to-br from-[#e6fdfe] to-[#d3fafe] p-6 rounded-xl border border-[#57e9f8] mt-10">
                <div className="flex items-center mb-4">
                  <div className="bg-[#57e9f8] p-1 rounded mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-[#0a192f]">Minha Abordagem</h4>
                </div>
                <p className="text-gray-700">
                  Busco unir desempenho, acessibilidade e experiência do usuário em cada projeto. 
                  Minha filosofia é desenvolver soluções que não apenas funcionem bem, mas que também 
                  sejam intuitivas e agradáveis de usar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;