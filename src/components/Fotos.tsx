interface Props{
  foto: string
  peu: string
  src: string
}

const Fotos = ({foto,peu}: Props) => {
return (
  <div className="flex w-full flex-col">
      <img src={foto}  alt="foto_gats" className="w-full max-h-full object-cover" />
      <p className="lobster text-xl">{peu}</p>
  </div>
)
}

export default Fotos