
export default function ProyCard({ imgURL, changeBigProyImage, bigProyImg, isFirstImage }) {
    const handleClick = () => {
        if (bigProyImg !== imgURL) {
            changeBigProyImage(imgURL);
        }
    };

    return (
        <div
            className={`border rounded-xl ${bigProyImg === imgURL
                    ? "border-grisclaro border-opacity-60 shadow-[0_0_10px_1px_rgba(30,125,103,0.7)]"
                    : "border-transparent"
                } cursor-pointer max-sm:flex-1 ${isFirstImage ? "first-image-style" : ""
                }`}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center w-[45px] h-[45px] rounded-md overflow-hidden">
                <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/${imgURL}.webp`}
                    alt={`imagen de ${imgURL}`}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
}