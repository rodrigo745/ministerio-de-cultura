import Organismos from "./typoCard/Organismos";
import Programas from "./typoCard/Programas";
import Museos from "./typoCard/Museos";
import Institutos from "./typoCard/Institutos";
import Tramites from "./typoCard/Tramites";
import Convocatorias from "./typoCard/Convocatorias";

export default async function Section({datos, type}){

    const esperarDatos = await datos;
    const cambioCategorias = (opcion)=>{
        switch(opcion){       
            case "Organismos": return <Organismos datos={esperarDatos}/>;
            case "Programas": return <Programas datos={esperarDatos} />
            case "Museos": return <Museos datos={esperarDatos} />
            case "Institutos": return <Institutos datos={esperarDatos} />
            case "Tramites": return <Tramites datos={esperarDatos} />
            case "Convocatorias": return <Convocatorias datos={esperarDatos} />
        }
    }

    const tipoCategoria = cambioCategorias(type);

    return(
        <div className="w-full md:w-3/4 section-contenedor-mayor">
            <div className="section-contenedor grid justify-center justify-items-center md:items-center sm:grid-cols-2 xl:grid-cols-3 mb-5">
                {
                   tipoCategoria
                }
            </div>
        </div>
    );
}
