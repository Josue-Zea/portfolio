import { useTranslation } from 'react-i18next'

export default function Sobremi() {
    const { t } = useTranslation('common');

    const habilidadesData = [
        {
            id: 1,
            name: t('sobremi.habilidades.tecnologias.name'),
            icon: "tecnologias",
            description: t('sobremi.habilidades.tecnologias.description')
        },
        {
            id: 2,
            name: t('sobremi.habilidades.uxdesign.name'),
            icon: "uxdesign",
            description: t('sobremi.habilidades.uxdesign.description')
        },
        {
            id: 3,
            name: t('sobremi.habilidades.fullstack.name'),
            icon: "frontend",
            description: t('sobremi.habilidades.fullstack.description')
        }
    ];

    return (
        <div>
            <div id="sobremi" className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 px-3 md:px-0 pt-10">
                <h2 className="text-4xl font-title font-extrabold tracking-wider leading-none md:text-5xl lg:text-5xl text-white text-center mt-5 mb-10">{t('sobremi.titulo')}</h2>
                <div className="md:flex gap-8 items-center justify-between md:mx-0">
                    <div className="md:w-2/5 pointer-events-none select-none">
                        <img
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/aboutme.webp`}
                            alt="Josué Zea - Desarrollador FullStack"
                            loading="lazy"
                        />
                    </div>
                    <div className="text-center md:text-left lg:text-left md:w-3/5">
                        <p className="mb-4 text-grisclaro2 lg:text-base 2xl:text-lg [text-wrap:pretty]">{t('sobremi.descripcion1')}</p>
                        <p className="mb-4 text-grisclaro2 lg:text-base 2xl:text-lg [text-wrap:pretty]">{t('sobremi.descripcion2')}</p>
                        <p className="mb-4 text-grisclaro2 lg:text-base 2xl:text-lg [text-wrap:pretty]">{t('sobremi.descripcion3')}</p>
                        <div className="flex justify-center">
                            <span className='inline-flex h-full animate-background-shine items-center justify-center rounded-full border border-text border-opacity-30 bg-[linear-gradient(110deg,#07090D,45%,#4D4B4B,55%,#07090D)] bg-[length:250%_100%] px-5 py-1.5 text-sm font-medium text-text backdrop-blur-3xl'>
                                {t('sobremi.disponibleTrabajar')}
                            </span>
                        </div>
                    </div>
                </div>
                <ul className=" grid gap-8 grid-cols-1 md:grid-cols-3 my-10">
                    {habilidadesData.map(habilidades => (
                        <li key={habilidades.id} className="relative h-full rounded-xl bg-black border border-grisclaro border-opacity-20 py-5 px-5 bg-opacity-10 [text-wrap:pretty] text-center flex flex-col items-center">
                            <div className='absolute top-0 flex w-full justify-center'>
                                <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/${habilidades.icon}.svg`} alt={`Icono de ${habilidades.name}`} loading="lazy" className="w-20 h-20 p-2 border border-grisclaro border-opacity-40 rounded-full" />
                                <h3 className="text-white uppercase font-semibold text-lg">{habilidades.name}</h3>
                                <p className="text-grisclaro2 font-text text-base">{habilidades.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}