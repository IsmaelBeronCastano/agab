interface Props{
    titol: string
    noticia: string
    foto1?: string
    foto2?: string
    foto3?: string
}

const Noticia = ({titol, noticia, foto1, foto2,foto3}: Props) => {
    
return (
    <div className="bg-purple-200 h-[full] w-[80%] rounded-md flex flex-col align-center">
            <h3 className="text-2xl text-center mx-auto amatic-bold bg-purple-400 w-[80%] text-align rounded-lg mt-3">{titol}</h3>
            <div className="flex w-full justify-center">
                <p className="lobster text-lg text-left p-3 whitespace-pre-line">{noticia}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 border-white rounded-lg">

            {
                    foto1? (
                            <img src={foto1} alt="foto_noticia" className="w-1/4 h-2/4 rounded-lg object-cover" />
                    ): null
            }

                    {(foto1 && foto2) ?(
                            <img src={foto1} alt="foto_noticia" className="w-1/4 h-2/4 rounded-lg object-cover" />
                            && <img src={foto2} alt="foto_noticia" className="w-1/4 h-2/4 rounded-lg object-cover" />
                    ): null}


                    {(foto1 && foto2 && foto3) ?(
                            <img src={foto1} alt="foto_noticia" className="w-1/4 h-2/4  rounded-lg object-cover" />
                            && <img src={foto2} alt="foto_noticia" className="w-1/4 h-2/4  rounded-lg object-cover" />
                            && <img src={foto3} alt="foto_noticia" className="w-1/4 h-2/4  rounded-lg object-cover" />
                    ): null
                    }
 
            </div>
            

    </div>
)
}

export default Noticia