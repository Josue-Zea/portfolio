import { redesData, enlacesData, webAbout } from "../data/redesData"

export default function Footer() {
    return (
        <footer className="bg-negrochido backdrop-blur-md bg-opacity-80 rounded-t-3xl border-t border-t-colorboton border-opacity-50">
            <div className="max-w-screen-xl mx-auto px-5 sm:px-8 md:w-5/6 lg:w-4/6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10 font-body text-center sm:text-left">

                    {/* Columna 1 */}
                    <div className="flex flex-col items-center sm:items-start">
                        <p className="text-white text-sm sm:text-base leading-relaxed">
                            Transformando ideas en realidad a través de código limpio y
                            soluciones innovadoras
                        </p>
                        <ul className="flex gap-6 mt-6">
                            {redesData.map((red) => (
                                <li
                                    key={red.id}
                                    className="cursor-pointer transition-transform duration-300 hover:scale-125"
                                >
                                    <a target="_blank" href={red.sitioWeb}>
                                        <img
                                            className="w-6 h-6 sm:w-5 sm:h-5"
                                            title={red.nombre}
                                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/${red.imagen}.svg`}
                                            alt={`imagen red social ${red.nombre}`}
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 2 */}
                    <div>

                    </div>

                    {/* Columna 3 */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h2 className="text-white uppercase font-semibold mb-4 text-sm sm:text-base">
                            Acerca de esta web
                        </h2>
                        <p className="text-white text-sm sm:text-base mb-4">Creado con:</p>
                        <ul className="flex flex-wrap justify-center sm:flex-col gap-3 mb-4">
                            {webAbout.map((web) => (
                                <li
                                    key={web.id}
                                    className="flex items-center gap-2 sm:gap-3"
                                >
                                    <img
                                        className="w-7 h-7 transition duration-300 rounded-full"
                                        title={web.name}
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/${web.imagen}.svg`}
                                        alt={`Logo de ${web.name}`}
                                    />
                                    <p className="text-white text-sm sm:text-base">{web.name}</p>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white text-sm">
                            por{" "}
                            <span className="font-semibold hover:text-colorboton">
                                Josué Zea
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
