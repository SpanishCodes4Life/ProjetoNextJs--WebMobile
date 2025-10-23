import "./globals.css";//header e footer fixado para paginas!!
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header className="header">
          <div className="logo">
            <Image 
      src="/logoHome.png" 
      alt="Logo MultiCursos" 
      width={60} 
      height={60} 
      className="logo-img"></Image>
       </div>

            <h1> MultiCursos</h1>
          
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/cursos">Cursos</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>@2025 MultiCursos-Todos os direitos reservados.</p>
         

          <a href="https://www.instagram.com/badbunnypr/">Instagram</a>
          <a href="">WhatsApp</a>
          <a href="https://www.youtube.com/@ticemtrilhas">Youtube</a>

        </footer> 
      </body>
    </html>
  );
}
