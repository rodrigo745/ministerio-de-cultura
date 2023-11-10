export default function Organismos({datos}){
    return(
        <>
            {
                datos.results.map(e=> ( 
                    <div key={e.id} className="section-card flex flex-col mb-5 shadow-slate-500 shadow-lg">
                        <div  className="flex-1 flex flex-col p-2 mt-2 h-full">
                            <label className="font-normal">{e.nombre}</label>
                            <hr className="mt-3"/>
                            <div className="flex flex-col text-sm mt-3">
                                <label >Direccion: { e.direccion && e.provincia ? `${e.direccion}, ${e.provincia}` : "S/D" }</label>
                                <label className="mt-2">Telefono: {e.telefono ? e.telefono : "S/D"}</label>
                                <label className="mt-2">Autoridad: {e.autoridad ? e.autoridad.nombre : "S/D"}</label>
                                <label className="mt-2">Cargo: {e.autoridad ? e.autoridad.cargo : "S/D"}</label>
                                <label className="mt-2">Depende de: {e.depende_de ? e.depende_de : "S/D"}</label>
                            </div>
                            <div className="position-apartado">
                                <label className="asd colorMarron text-center text-sm p-2 w-2/4  text-white rounded-sm">Codigo: {e.id}</label>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </>
    )
}