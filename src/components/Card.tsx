

interface Props{
    foto: string
    nom: string
    descripcio: string
}

const Card = ({foto, nom, descripcio}:Props) => {
    return (
        <div className="bg-purple-500 p-4 rounded-lg sm:w-full md:w-3/6 md:items-center mt-4">
            <img src={foto} alt="Imagen" className="w-full object-cover" />
            <div className="bg-white p-2 mt-4 rounded-lg">
                <div>
                    <h3 className="text-xl text-center amatic-bold">
                        <span className="text-2xl text-center amatic-bold">Nom: </span>{nom}
                    </h3>
                </div>
                <div className='flex justify-center'>
                    <p className="text-left flex-wrap whitespace-pre-line indie-flower items-center">{descripcio}</p>

                </div>
            </div>
        </div>
    );
};

export default Card;