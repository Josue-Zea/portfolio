import Layout from "../layout/Layout"
import Landing from "../components/Landing"
import Sobremi from "../components/Sobremi"
import Proyectos from "../components/Proyectos"
import Tecnologias from "../components/Tecnologias"
import Logros from "../components/Logros"
import Contacto from "../components/Contacto"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Home() {
  return (
    <Layout>  
        <Landing />
        <div className="[background-image:url(/img/bg-web.webp)] bg-center bg-cover">
          <Sobremi />
          <Proyectos />
          <Tecnologias />
          <Logros />
          <Contacto />
          <ToastContainer/>
        </div>
    </Layout>
    
  )
}
