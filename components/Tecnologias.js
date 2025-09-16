import { tecnologiasData } from "../data/tecnologiasData"

export default function Tecnologias() {
  return (
    <div className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 pt-10">
      <h2 className="text-4xl font-title font-extrabold tracking-wider leading-none md:text-5xl lg:text-5xl text-white text-center mb-10">
        Habilidades
      </h2>

      {/* Cinta infinita */}
      <div className="w-full overflow-hidden mb-6 [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
        <div className="animate-scroll inline-flex">
          {/* Primera serie de elementos */}
          {tecnologiasData.map((tecnologia, index) => (
            <div key={`first-${index}`} className="flex flex-col items-center mx-8 flex-shrink-0 min-w-max">
              <img
                className="w-10 h-10 filter grayscale pointer-events-none cursor-none mb-2"
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/${tecnologia.imagen}.svg`}
                alt={`imagen de ${tecnologia.nombre}`}
              />
              <p className="text-sm md:text-base text-center font-semibold text-white whitespace-nowrap">{tecnologia.nombre}</p>
            </div>
          ))}
          {/* Segunda serie de elementos (duplicada para loop infinito) */}
          {tecnologiasData.map((tecnologia, index) => (
            <div key={`second-${index}`} className="flex flex-col items-center mx-8 flex-shrink-0 min-w-max">
              <img
                className="w-10 h-10 filter grayscale pointer-events-none cursor-none mb-2"
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/${tecnologia.imagen}.svg`}
                alt={`imagen de ${tecnologia.nombre}`}
              />
              <p className="text-sm md:text-base text-center font-semibold text-white whitespace-nowrap">{tecnologia.nombre}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}