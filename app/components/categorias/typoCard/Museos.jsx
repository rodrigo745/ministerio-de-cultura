export default function Museos({datos}){
    return(
        <>
        {
            datos.results.map(e=> ( 
                <div key={e.id} className="section-card flex flex-col mb-5 shadow-slate-500 shadow-lg">
                    <div  className="flex-1 flex flex-col p-2 mt-2 h-full">
                        <label className="font-normal">{e.nombre}</label>
                        <hr className="mt-3"/>
                        <div className="flex flex-col text-sm mt-3">
                            <label >Direccion: { e.direccion ? `${e.direccion}` : "S/D" }</label>
                            <label className="mt-2">Telefono: {e.telefono ? e.telefono : "S/D"}</label>
                            <label className="mt-2">Correo: {e.email ? e.email : "S/D" }</label>
                            <label className="mt-2">Depende de: {e.depende_de ? e.depende_de : "S/D"}</label>
                            <label className="mt-2">Autoriad: {e.autoridad ? e.autoridad.nombre : "S/D"}</label>
                        </div>
                        <div className="position-apartado">
                                <a href={e.link} target="_blank" className="asd colorMarron text-center text-sm p-2 w-2/4  text-white rounded-sm">Enlace del apartado</a>
                            </div>
                    </div>
                </div>
            ))
        }
        
    </>
    );
}