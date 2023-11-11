
export default function Convocatorias({datos}){
    return(
        <>
        { 
            datos.results.map((e)=> ( 
                <div key={e.id} className="section-card section-card-tramite flex flex-col mb-5 shadow-slate-500 shadow-lg">
                    <label className={e.estado == "abierta" ? "badge-convocatorias abierta" : "badge-convocatorias cerrada"}>{e.estado}</label>
                    <div  className="flex-1 flex flex-col p-2 h-full">
                        <label className="font-normal">{e.titulo}</label>
                        <hr className="mt-2"/>
                        <div className="flex flex-col text-sm ">
                        <label className="mt-2">Descripcion: {e.bajada ? e.bajada : "S/D"}</label>
                        <label className="mt-2">Fecha: {e.fecha_inicio ? `(${e.fecha_inicio}) / (${e.fecha_fin})` : "S/D"}</label>
                        </div>
                        <div className="position-apartado flex flex-col justify-end">
                            { e.documentos.length === 0 ? <label className="w-full text-center">Sin datos de documentos</label> : 
                                e.documentos.map(index => (
                                    <a href={index} key={index} target="_black" className="asd asd-tramite colorMarron text-center text-sm  text-white rounded-sm">Documento del apartado</a>
                                ))
                             }
                        </div>
                    </div>
                </div>
            ))
        }
    </>
    );
}