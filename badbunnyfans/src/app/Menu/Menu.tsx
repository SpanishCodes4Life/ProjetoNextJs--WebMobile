import Link from "next/link";

export default function Menu(){
    return(
        <nav>
            <Link href="/">Home</Link>&nbsp;|&nbsp;
            <Link href="./cursos">Cursos</Link>&nbsp;|&nbsp;
        </nav>
    )
}