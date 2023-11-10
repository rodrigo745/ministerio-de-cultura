import "./categorias.css";
import Aside from "@/app/components/categorias/Aside";
import Section from "@/app/components/categorias/Section";

export default async function CategoriaGeneral({params}){
    const id = params.nombreCategoria;
    const datos = await getDatos(id);

    return(
        <div className="categorias-contenedor-mayor">
            <div className="flex flex-col md:flex-row">
                <Aside nombre={id} />
                <Section datos={datos} type={id}/>
            </div>
        </div>
    );
}
async function getDatos(parametroCat){
    var enlace;
    switch(parametroCat){
        case "Organismos": enlace = await fetch(process.env.ORGANISMOS_API);
            break;
        case "Programas": enlace = await fetch(process.env.PROGRAMAS_API);
            break;
        case "Museos": enlace = await fetch(process.env.MUSEOS_API);
            break;
        case "Institutos": enlace = await fetch(process.env.INSTITUTOS_API);
            break;
        case "Tramites": enlace = await fetch(process.env.TRAMITES_API);
            break;
        case "Convocatorias": enlace = await fetch(process.env.CONVOCATORIAS_API);
            break;
    }
    const mostrarEnlace = enlace.json();
    return mostrarEnlace;
}
