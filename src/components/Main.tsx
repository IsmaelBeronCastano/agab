import Card from "./Card"
import Noticies from "./Noticies"
import blanquet from '../assets/blanquet_ferit.jpg'



const Main = () => {
  return (
    <div className="container w-full h-full flex-row">
      <h2 className="text-2xl amatic-bold pt-4 mb-10 pl-2 text-center">Ens dediquem a cuidar dels animals en situació de carrer i amb necessitats a la zona de Balenyà</h2>
      <h3 className="text-2xl sm:w-5/6 md:1/4 rounded-lg p-3 alfa-slab text-center mx-auto bg-purple-600 text-white mb-8">NOTICIES</h3>
      <section className="w-full h-full flex justify-center">
        <Noticies />
      </section>
      <h3 className="text-2xl sm:w-5/6 md:1/4 rounded-lg p-3 alfa-slab mt-4 text-center mx-auto bg-purple-600 text-black mb-8">GATS EN ADOPCIÓ</h3>
      <section className="w-full h-full md:flex justify-center gap-3">
        <Card  foto={blanquet} nom="Blanquet" descripcio={`
        El blanquet es molt carinyós.
        Fa temps que es amb nosaltres.
        Busca una familia que l'estimi
        `} />
        <Card  foto={blanquet} nom="Blanquet" descripcio={`
        El blanquet es molt carinyós.
        Fa temps que es amb nosaltres.
        Busca una familia que l'estimi
        `} />
        <Card  foto={blanquet} nom="Blanquet" descripcio={`
        El blanquet es molt carinyós.
        Fa temps que es amb nosaltres.
        Busca una familia que l'estimi
        `} />
        <Card  foto={blanquet} nom="Blanquet" descripcio={`
        El blanquet es molt carinyós.
        Fa temps que es amb nosaltres.
        Busca una familia que l'estimi
        `} />
      
      </section>
      <h3 className="text-2xl sm:w-5/6 md:1/4 rounded-lg p-3 alfa-slab mt-4 text-center mx-auto bg-purple-600 text-black mb-8">DONACIONS</h3>
      <section>
        <p className="text-2xl text-center amatic-bold">Si vols fer una donació pots fer-ho a través de Bizzum o transferència bancària</p>
        <p className="text-4xl text-center amatic-bold pt-4 pb-4">bizzum: <span className="lora text-4xl">689969006</span></p>
        <p className="text-4xl text-center amatic-bold">IBAN: <span className="lora text-4xl">ES29 0182 9746 7002 0008 3106</span> </p>
      </section>
    </div>
  )
}

export default Main