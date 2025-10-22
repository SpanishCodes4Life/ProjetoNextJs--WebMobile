import "./globals.css";
import Menu from "./Menu/Menu";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Menu />
        <hr />
        {children}
      </body>
    </html>
  );
}
