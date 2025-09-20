import { useTranslation } from 'next-i18next'

export default function Tecnologias() {
  const { t } = useTranslation('common');
  
  const tecnologiasData = [
    {
      id: 1,
      nombre: "JavaScript",
      imagen: "javascript",
      descripcion: t('tecnologias.javascript')
    },
    {
      id: 2,
      nombre: "React",
      imagen: "react",
      descripcion: t('tecnologias.react')
    },
    {
      id: 3,
      nombre: "Node.js",
      imagen: "nodejs",
      descripcion: t('tecnologias.nodejs')
    },
    {
      id: 4,
      nombre: "MongoDB",
      imagen: "mongodb",
      descripcion: t('tecnologias.mongodb')
    },
    {
      id: 5,
      nombre: "Next.js",
      imagen: "nextjs",
      descripcion: t('tecnologias.nextjs')
    },
    {
      id: 6,
      nombre: "Tailwind",
      imagen: "tailwind",
      descripcion: t('tecnologias.tailwind')
    },
    {
      id: 7,
      nombre: "Flutter",
      imagen: "flutter",
      descripcion: t('tecnologias.flutter')
    },
    {
      id: 8,
      nombre: "Angular",
      imagen: "angular",
      descripcion: t('tecnologias.angular')
    },
    {
      id: 9,
      nombre: "Laravel",
      imagen: "laravel",
      descripcion: t('tecnologias.laravel')
    },
    {
      id: 10,
      nombre: "Oracle",
      imagen: "oracle",
      descripcion: t('tecnologias.oracle')
    },
    {
      id: 11,
      nombre: "Firebase",
      imagen: "firebase",
      descripcion: t('tecnologias.firebase')
    },
    {
      id: 12,
      nombre: "AWS",
      imagen: "aws",
      descripcion: t('tecnologias.aws')
    },
    {
      id: 13,
      nombre: "Docker",
      imagen: "docker",
      descripcion: t('tecnologias.docker')
    },
    {
      id: 14,
      nombre: "TypeScript",
      imagen: "typescript",
      descripcion: t('tecnologias.typescript')
    },
    {
      id: 15,
      nombre: "Spring Boot",
      imagen: "springboot",
      descripcion: t('tecnologias.springboot')
    },
    {
      id: 16,
      nombre: "Java",
      imagen: "java",
      descripcion: t('tecnologias.java')
    },
    {
      id: 17,
      nombre: "MySQL",
      imagen: "mysql-icon",
      descripcion: t('tecnologias.mysql')
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 pt-10">
      <h2 className="text-4xl font-title font-extrabold tracking-wider leading-none md:text-5xl lg:text-5xl text-white text-center mb-10">
        {t('header.navegacion.tecnologias')}
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