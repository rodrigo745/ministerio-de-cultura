import { useState } from "react";


export default function ModalNav({quitar, apartado}){
    const [mostrarModal, setMostrarModal] = useState();

    const informacion = 
        [
            {
                "titulo": "Enlaces",
                "descripcion": "Aquí puede explorar una variedad de enlaces y secciones relacionadas con el Ministerio de Cultura que lo llevarán fuera del sitio web actual, esto con el fin de acceder a contenido adicional y recursos relacionados.",
                "tituloEnlaceDos": "Ministerio de cultura",
                "enlaceUno": "https://www.argentina.gob.ar/cultura",
                "enlaceDos": "https://www.argentina.gob.ar/cultura/museos-institutos",
                "enlaceTres": "https://www.argentina.gob.ar/cultura/organismos",
                "enlaceCuatro": "https://www.argentina.gob.ar/cultura/convocatorias",
                "enlaceCinco": "",
                "enlaceSeis": "",
            },
            {
                "titulo": "Desarrollador",
                "descripcion": "Detalles de contacto del desarrollador de la pagina, e información adicional sobre su creación.",
                "nombre": "Rodrigo Javier Quinteros.",
                "contacto": "Estos detalles se encuentran en el cv.",
                "correo": "roodrigoquinteros@gmail.com",
                "cv": "",
                "tecnologias": "Next.js, React.js, Tailwind.css, Javascript, JSON, CSS, HTML, AdobeXD.",
                "api": "Informacion obtenida por la Api oficial del Ministerio de cultura."
            }
        ]

    const agregarModal = ()=> {
        (mostrarModal == true) ? setMostrarModal(false) : setMostrarModal(true); 
    }
    return(
        <div className="contenedor-modal">
            <div className="marco-modal">
                <div className="flex justify-between">
                    <label className="text-xl mt-2">{informacion[apartado].titulo}</label>
                    <button className="btn-modal" onClick={quitar}>X</button>
                </div>
                <div className="flex flex-col mt-5"> {/* Cuerpo del modal */}
                    <hr/>
                    <label className="mt-5">{informacion[apartado].descripcion}</label>
                    {
                        apartado == "0" ?
                            // Enlaces
                            <div className="mt-5 flex flex-col">
                                <label className="mt-5">Ministerio de Cultura: 
                                    <a href={informacion[apartado].enlaceUno} target="_blank"> {informacion[apartado].enlaceUno}</a>
                                </label>
                                <label className="mt-5">Museos: 
                                    <a href={informacion[apartado].enlaceDos} target="_blank"> {informacion[apartado].enlaceDos}</a>
                                </label> 
                                <label className="mt-5">Organismos: 
                                    <a href={informacion[apartado].enlaceTres} target="_blank"> {informacion[apartado].enlaceTres}</a>
                                </label> 
                                <label className="mt-5">Convocatorias: 
                                    <a href={informacion[apartado].enlaceCuatro} target="_blank"> {informacion[apartado].enlaceCuatro}</a>
                                </label> 
                            </div>
                        :
                            // Desarrollador
                            <div className="mt-5 flex flex-col">
                                <label className="mt-2">Nombre: {informacion[apartado].nombre}</label>
                                <label className="mt-2">Contacto: {informacion[apartado].contacto}</label>
                                <label className="mt-2">Correo: {informacion[apartado].correo}</label>
                                <label className="mt-2">Tecnologias utilizadas: {informacion[apartado].tecnologias}</label>
                                <label className="mt-2">API: {informacion[apartado].api}</label>
                                <label className="mt-2">Descargar CV: agregar enlace de descarga</label>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
}