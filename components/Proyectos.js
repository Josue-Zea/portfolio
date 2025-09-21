import { useState } from "react";
import { proyectosData } from "../data/proyectosData";
import ProyCard from "./ProyCard";
import { IconGlobal } from "./Icons";
import { useTranslation } from "next-i18next";

const ImageZoomModal = ({ isOpen, onClose, imageSrc, altText }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold z-10"
                    aria-label="Cerrar modal"
                >
                    ✕
                </button>
                <img
                    src={imageSrc}
                    alt={altText}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
    );
};

export default function Proyectos() {
    const [bigProyImgs, setBigProyImgs] = useState({})
    const [modalState, setModalState] = useState({
        isOpen: false,
        imageSrc: '',
        altText: '',
        proyectoNombre: ''
    });
    const { t } = useTranslation('common');

    const updateBigProyImg = (proyectoId, imgURL) => {
        setBigProyImgs((prevBigProyImgs) => ({
            ...prevBigProyImgs,
            [proyectoId]: imgURL,
        }));
    };

    const openModal = (imageSrc, altText, proyectoNombre) => {
        setModalState({
            isOpen: true,
            imageSrc,
            altText,
            proyectoNombre
        });
    };

    const closeModal = () => {
        setModalState({
            isOpen: false,
            imageSrc: '',
            altText: '',
            proyectoNombre: ''
        });
    };

    return (
        <>
            <div>
                <div id="proyectos" className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 pt-10">
                    <h2 className="text-4xl font-title font-extrabold tracking-wider leading-none md:text-5xl lg:text-5xl text-white text-center mt-5 mb-10">{t('header.navegacion.proyectos')}</h2>
                    <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10 md:mx-0 px-3 md:px-0">
                        {proyectosData.map(proyecto => {
                            const bigProyImg = bigProyImgs[proyecto.id] || proyecto.imagenes[0];
                            return (
                                <div key={proyecto.id}
                                    className=" overflow-hidden flex flex-col bg-black border border-grisclaro border-opacity-20 bg-opacity-20 rounded-lg">
                                    <div className='flex flex-col lg:flex-row justify-center items-center px-3'>
                                        <div className="lg:order-2 w-72 h-60 flex items-center justify-center overflow-hidden rounded-xl">
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/${bigProyImg}.webp`}
                                                alt={`imagen ${bigProyImg}`}
                                                className="w-4/5 h-4/5 object-contain md:cursor-pointer md:hover:scale-105 transition-transform duration-300 select-none"
                                                onClick={() => openModal(
                                                    `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/${bigProyImg}.webp`,
                                                    `imagen ${bigProyImg}`,
                                                    proyecto.nombreProyecto
                                                )}
                                            />
                                        </div>
                                        <div className='flex lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-2 justify-center lg:order-1'>
                                            {proyecto.imagenes.map((image, index) => (
                                                <div key={index} className="transition-all duration-300 hover:shadow-[0_0_10px_1px_rgba(30,125,103,0.7)] rounded-lg">
                                                    <ProyCard
                                                        index={index}
                                                        imgURL={image}
                                                        changeBigProyImage={(proy) => updateBigProyImg(proyecto.id, proy)}
                                                        bigProyImg={bigProyImg}
                                                        isFirstImage={index === 0}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-full flex flex-col justify-between px-5 pb-5">
                                        <div className="flex h-full flex-col justify-between">
                                            <div>
                                                <div className="flex items-center justify-center gap-2 my-3">
                                                    <h3 className="text-xl text-white font-bold tracking-tight text-center">
                                                        {t(proyecto.nombreProyecto)}
                                                    </h3>

                                                    {proyecto.sitioWeb && proyecto.sitioWeb.trim() !== "" && (
                                                        <a
                                                            target="_blank"
                                                            href={proyecto.sitioWeb}
                                                            className="ml-2 text-white hover:scale-110 transition"
                                                            aria-label={`Visitar sitio web ${proyecto.nombre}`}
                                                        >
                                                            <IconGlobal />
                                                            <span className="sr-only">Visitar sitio web {proyecto.nombre}</span>
                                                        </a>
                                                    )}
                                                </div>
                                                <p className="mb-[5px] font-normal text-grisclaro2 [text-wrap:pretty]">{t(proyecto.descripcionProyecto)}</p>
                                            </div>
                                            <ul className="flex items-center justify-center gap-3 mb-2">
                                                {proyecto.tecnologias.map((tecnologia, index) => (
                                                    <li key={index} className="flex items-center gap-1 text-text px-4 py-1.5 text-sm font-medium border border-text border-opacity-30 rounded-full bg-[#07090D] bg-opacity-60">
                                                        <img className="w-5 h-5" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/${tecnologia.image}.svg`} alt={`imagen de logo ${tecnologia.nombre}`} />
                                                        <p>{tecnologia.name}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Modal de Zoom */}
            <ImageZoomModal
                isOpen={modalState.isOpen}
                onClose={closeModal}
                imageSrc={modalState.imageSrc}
                altText={modalState.altText}
            />
        </>
    )
}