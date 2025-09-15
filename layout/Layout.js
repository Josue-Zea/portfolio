import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "next/head"

export default function Layout({ children }) {

    return (
        <> 
            <Head>
                <title>Josué Zea | FullStack</title>
                <meta name='description' content="Desarrollador FullStack especializado en FrontEnd, Transformando ideas en realidad a traves de codigo limpio y soluciones innovadoras" />
                <link rel="icon" type="image/svg+xml" href="/img/logoicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://josue-zea.github.io/portfolio"></link>
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Josué Zea" />
                <meta name="keywords" content="desarrollador, fullstack, Frontend, desarrollo web, HTML, CSS, JavaScript, React, NextJs, Tailwind, diseño web, responsive design, python, java, typescript, next, nest, spring boot, flask, flutter, mysql, oracle, desarrollo frontend, portfolio, proyectos web, desarrollo de sitios web" />
                <meta name="og:title" content="Josué Zea | FullStack" />
                <meta name="og:description" content="Desarrollador FullStack, Transformando ideas en realidad a traves de codigo limpio y soluciones innovadoras" />
                <meta name="og:image" content="/img/metaimg.webp" />
                <meta name="og:image:alt" content="Imagen del sitio web de Josué Zea" />

            </Head>
                
            <Header />

            <main className="font-text">
                { children }
            </main>

            <Footer />
        </>
    )
}