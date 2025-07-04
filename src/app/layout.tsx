// Local do arquivo: /app/layout.tsx

// Importe seu CSS global aqui.
import './globals.css'; 
// Importe os componentes que se repetem em todas as páginas.
import Header from '../components/Header';
import Footer from '../components/Footer';

// 'metadata' ajuda com o SEO do seu site, é uma boa prática.
export const metadata = {
  title: 'Portfólio | Kauã Henrique',
  description: 'Portfólio de desenvolvimento de Kauã Henrique',
};

// Este é o RootLayout que o Next.js procura.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="pt-BR">

      <body>
        <Header />
        <main>
          {/* A variável 'children' renderizará o conteúdo da sua 'page.tsx' aqui. */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
