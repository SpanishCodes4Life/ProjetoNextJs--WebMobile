import Link from "next/link";
import estilos from "./home.module.css";
export default function Home(){
  const tema = [
    { icon: "💘", nome: "Saúde e Bem-Estar", texto: "Venha conhecer diversos cursos relacionados a Yoga e Práticas para o Bem-Estar de sua Saúde!", linkRota: "/cursos/Saude" },
    { icon: "🖥️", nome: "Tecnologia", texto: "Venha conhecer diversos cursos de Tecnologia para impulsionar sua carreira para frente!",linkRota: "/cursos/Tecnologia" },
    { icon: "📚", nome: "Idiomas", texto: "Aprenda inglês, espanhol, francês e outros idiomas gratuitamente.",linkRota: "/cursos/Idiomas"}, 
    { icon: "🛒💻", nome: "E-commerce", texto: "Monte sua loja online, use marketplaces e ferramentas de vendas.",linkRota: "/cursos/Ecommerce"}
  ];
  return(
    <>{/*ESSE AQUI É COISA DO REACT CONFUSO 0_0*/}
      <nav>
        <h1>Aprende como quiser, onde quiser e sem pagar nada!
        <br/>
        Aprenda com os melhores em diversas áreas.</h1>
      </nav>
      <main className={estilos.containerpaitemas}>
        <h2>Oi este é meu site</h2>
          <section className={estilos.containertemas}>
            {/*ESTE .MAP RENDERIZA A LISTA COM ESTILOS
            CADA OBJETO É UM TEMA, DÁ PRA ESTILIZAR DENTRO DO MAP, 
            EU ESTILIZEI POR FORA COM O IMPORT LÁ EM CIMA 
            SÓ VER O ARQUIVO HOME.MODULE.CSS
            */}
            {tema.map((tema,index) => (
              <section key={index} className={estilos.temacard}>
                <h1>{tema.icon}</h1>
                <h2>{tema.nome}</h2>
                <p>{tema.texto}</p>
                <Link href={tema.linkRota} className={estilos.link}>Saiba Mais</Link>
              </section>
        ))}
        </section>
      </main>
    </>
  ) 
}