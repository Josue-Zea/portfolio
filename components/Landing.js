import { headerData } from "../data/headerData"
import { redesData } from "../data/redesData"
import Link from "next/link"

export default function Landing() {
    return (
        <section className={`[background-image:url(${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/hero.webp)] bg-top bg-cover h-[915px] lg:h-[700px] flex items-center`}>
            <div id="inicio" className="max-w-screen-xl mx-auto md:w-4/6 2xl:w-4/6 mt-48 lg:mt-0">
                <div className="flex flex-col lg:flex-row items-center justify-center px-3 md:px-0">

                    {/* Textos */}
                    <div className="lg:w-1/2 flex flex-col text-center lg:text-left order-first lg:order-first">
                        <p className="text-[#9ae5db] font-semibold text-2xl mb-2 leading-none">Hola, soy</p>
                        <h1 className="text-4xl font-title font-black leading-none md:text-6xl lg:text-5xl 2xl:text-7xl text-white">{headerData.nombre}</h1>
                        <p className="mb-4 mt-2 lg:mt-0 text-2xl font-semibold font-secundary leading-none md:text-3xl lg:text-4xl text-textdestacado">{headerData.titulo}</p>
                        <p className="mb-6 text-lg font-normal text-grisclaro2 md:text-base 2xl:text-xl [text-wrap:balance]">{headerData.descripcion}</p>

                        <div className="flex items-center justify-center lg:justify-start gap-5">
                            <Link legacyBehavior href="https://drive.google.com/file/d/1_iWJ6VefW4-Td6v39_OD7xhmhGlA4s3I/view?usp=sharing">
                                <a
                                    target="_blank"
                                    className="flex gap-1 items-center py-2.5 px-5 text-sm text-white font-medium bg-transparent rounded-full border transition duration-300 hover:bg-colorboton hover:scale-105 hover:shadow-[0_0_20px_3px_rgba(30,125,103,0.7)]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    Descargar CV
                                </a>
                            </Link>

                            <ul className="flex gap-4">
                                {redesData.map((red) => (
                                    <li key={red.id} className="cursor-pointer transition-all duration-300 hover:scale-150">
                                        <a target="_blank" href={red.sitioWeb}>
                                            <img
                                                className="w-4 h-4"
                                                title={red.nombre}
                                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/${red.imagen}.svg`}
                                                alt={`imagen red social ${red.nombre}`}
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Imagen */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0 order-last lg:order-last">
                        <div className="pointer-events-none select-none">
                            <img
                                className="w-auto h-[600px] max-w-full"
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/josuezea.webp`}
                                alt="Imagen de Josué Zea Developer"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}