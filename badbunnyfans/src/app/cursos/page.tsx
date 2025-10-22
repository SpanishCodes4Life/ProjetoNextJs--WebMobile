import Link from "next/link";
import Image from "next/image";
import estilos from "./cursos.module.css"

export default function Cursos(){
    const cursoscard = [
        {categoria: "Web", nivel: "Iniciante",titulo: "Fundamentos para Desenvolver Soluções CRM em Low-Code",subtitle: "Crie soluções CRM com Salesforce Low-Code",image:"/images/designer.jpg",link: "https://ticemtrilhas.org.br/trail/005cec0d-56a4-45dc-9803-50b4d9501511"},
        {categoria: "Web", nivel: "Iniciante", titulo: "Fundamentos de Orientação a Objetos.",subtitle: "Aprenda como funciona o paradigma da Programação Orientada a Objetos",image:"/images/developer.jpg",link: "https://ticemtrilhas.org.br/trail/6eef3a76-9105-4cfe-9520-2525a27e6507"},
        {categoria: "Web", nivel: "Iniciante", titulo: "Versionamento de Código",subtitle: "Aprenda a trabalhar com códigos de forma colaborativa.", image:"/images/gamer.jpg",link: "https://ticemtrilhas.org.br/trail/946fbd1e-af1b-4a86-8551-440eb269181c"},
        {categoria: "Web", nivel: "Intermediario", titulo: "Conhecendo Recursos Avançados para Low-Code", subtitle: "Crie soluções digitais com plataformas Low-Code",image:"/images/low-code.png",link: "https://ticemtrilhas.org.br/trail/78675926-15cd-4d5f-9a70-08196789c114"},
        {categoria: "Web", nivel: "Avançado", titulo: "Dominando Banco de Dados.", subtitle: "Domine técnicas avançadas de banco de dados.",image: "/images/bancodedados.jpg",link:"https://ticemtrilhas.org.br/trail/163b5e8d-7e95-4e42-96c9-c3a8503da279"}
    ];
    return(
        <main>
            <nav className={estilos.containeravo}>
                <article className={estilos.containerpai}>
                    {cursoscard.map((card,index) => (
                        <article key={index} className={estilos.carditem}>
                            {/*EM ANDAMENTO SE ENTENDER A VONTADE PODE CODAR*/}
                                <Link href={card.link} className={estilos.linkcard}>
                                    <div className={estilos.imagemcard}>
                                    <Image 
                                    src={card.image}
                                    alt="ImagemWeb"
                                    fill={true}
                                    style={{objectFit: 'cover', borderRadius:'10px', aspectRatio: '16/9'}}
                                    />
                                    </div>
                                    <p>{card.categoria}</p>
                                    <p>{card.nivel}</p>
                                    <h2>{card.titulo}</h2>
                                    <h3>{card.subtitle}</h3>
                                </Link>
                        </article>
                    ))}
                </article>
            </nav>
            
        </main>
    )
}