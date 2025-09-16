import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { redesData } from '../data/redesData';
import { toast } from "react-toastify"

export default function Contacto() {
    const form = useRef();
    const [formError, setFormError] = useState(false)
    const [formValues, setFormValues] = useState({})

    const sendEmail = (e) => {
        e.preventDefault();

        const { nombre, email, mensaje } = form.current;
        if (!nombre.value || !email.value || !mensaje.value) {
            setFormError(true);
            return;
        }

        emailjs.send('service_ycaodod', 'template_jb9v0h8',
            {
                from_name: "---",
                name: nombre.value,
                time: new Date().toLocaleString(),
                message: mensaje.value,
                email: email.value,
            }, "3wpKDSE5qr10RetdE"
        )
            .then((_) => {
                toast.success("Mensaje Enviado Correctamente", {
                    theme: "colored"
                });

                setFormValues({});
                form.current.reset();
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <div id='contacto' className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 py-10 px-3 md:px-0">
                <h2 className="text-4xl font-title font-extrabold tracking-wider leading-none md:text-5xl lg:text-5xl text-white text-center mt-5 mb-10">Contacto</h2>
                <div className="grid md:grid-cols-2 gap-6 content-center items-center mb-16">
                    <div className=' rounded-lg py-5 px-5 bg-black border border-grisclaro border-opacity-20 bg-opacity-30 order-2 md:order-1'>
                        {formError && (
                            <div className="mb-3">
                                <p className="text-red-500">Por favor, completa todos los campos del formulario.</p>
                            </div>
                        )}
                        <form ref={form} onSubmit={sendEmail}>

                            <div className="mb-6">
                                <label htmlFor="nombre" className="block mb-2  font-medium text-white">Tu Nombre</label>
                                <input type="text" value={formValues.nombre || ""} onChange={handleInputChange} id="nombre" name="nombre" placeholder="Escribe tu nombre" className=" bg-black bg-opacity-20 border border-grisclaro border-opacity-20 text-white rounded-lg focus:ring-grisclaro focus:outline-none focus:ring-1  block w-full p-2.5 transition duration-300" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2  font-medium text-white">Tu Correo</label>
                                <input type="email" value={formValues.email || ""} onChange={handleInputChange} id="email" name="email" className=" bg-black bg-opacity-20 border border-grisclaro border-opacity-20 text-white rounded-lg focus:ring-grisclaro focus:outline-none focus:ring-1  block w-full p-2.5 transition duration-300" placeholder="Escribe tu correo electronico" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="mensaje" className="block mb-2  font-medium text-white">Tu Mensaje</label>
                                <textarea id="mensaje" value={formValues.mensaje || ""} onChange={handleInputChange} name="mensaje" rows="4" className="bg-black bg-opacity-20 border border-grisclaro border-opacity-20 text-white rounded-lg focus:ring-grisclaro focus:outline-none focus:ring-1  block w-full p-2.5 transition duration-300 resize-none" placeholder="Escribe tu Mensaje aqui" required></textarea>
                            </div>
                            <button type="submit" className="flex flex-1 gap-1 items-center justify-center py-2.5 px-8 text-sm text-white font-bold bg-colorboton rounded-full border transition duration-300 hover:bg-colorboton hover:scale-105 hover:shadow-[0_0_20px_3px_rgba(30,125,103,0.7)]">Enviar
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col items-center order-1 md:order-2">
                        <img className='w-auto h-56 pointer-events-none cursor-none' src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/redes.svg`} alt="imagen de redes" />
                        <p className='mb-3 mt-3 text-2xl text-white text-center md:text-left font-bold tracking-tight'>Redes Sociales</p>
                        <ul className='flex gap-4 mt-4'>
                            {redesData.map(red => (
                                <li key={red.id} className='cursor-pointer transition-all duration-300 hover:scale-150'>
                                    <a target="_blank" href={red.sitioWeb}>
                                        <img className='w-4 h-4' title={red.nombre} src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/${red.imagen}.svg`} alt={`imagen red social ${red.nombre}`} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}