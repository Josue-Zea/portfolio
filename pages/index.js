import Layout from "../layout/Layout"
import Landing from "../components/Landing"
import Sobremi from "../components/Sobremi"
import Proyectos from "../components/Proyectos"
import Tecnologias from "../components/Tecnologias"
import Logros from "../components/Logros"
import Contacto from "../components/Contacto"
import AnimateOnScroll from "../components/AnimateOnScroll"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Home() {
  return (
    <Layout>
      <Landing />
      <div
        className="bg-center bg-cover"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/bg-web.webp)`
        }}
      >
        <AnimateOnScroll>
          <Sobremi />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Proyectos />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Tecnologias />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Logros />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Contacto />
        </AnimateOnScroll>
        <ToastContainer />
      </div>
    </Layout>
  )
}
