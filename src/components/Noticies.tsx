import Noticia from "./Noticia"
import gabia1 from '../assets/noticies/gabia_1.jpg';
import gabia2 from '../assets/noticies/gabia_2.jpg';
import gabia3 from '../assets/noticies/gabia_3.jpg';


const Noticies = () => {
return (
    <div className="container w-[90%] h-full flex justify-center bg-gray-300 pt-4 pb-4">
            <Noticia titol="El vent ens ha fet malbé la gatera" noticia={ `Les desgràcies mai venen soles...
            
            En època de cadells/es, sense pinso i amb deutes, un temporal ens ha destrossat la gatera. 
            Si us plau, necessitem ajuda!
            Bizzum: 689969006
            IBAN: ES29 0182 9746 7002 0008 3106
            
            Castellano:
            El viento nos ha destrozado la gatera.
            Las desgracias nuca vienen solas... En época de cachorros/as, sin pienso y con deudas, un temporal nos ha destrozado la gatera.
            Por favor, necesitamos ayuda!
            
            Bizzum: 689969006
            IBAN: ES29 0182 9746 7002 0008 3106
            ` }
            foto1={gabia1}
            foto2={gabia2}
            foto3={gabia3}
            />

    </div>
)
}

export default Noticies