import Link from "next/link";

export default function Aside({nombre}){
    return(
        <div className="w-full md:w-1/4">
            <div className="aside-contenedor text-lg shadow-sm" >Categoria: {nombre}</div>
            <div className="aside-contenedor  shadow-sm aside-reducido">
                <button>Otras Categorias</button>
                <div className="flex flex-col mt-3">
                    <hr />
                    {
                        activo.map((e, index) => (<Link href={`/categorias/${e.titulo}`} key={index}
                            className={(e.titulo == nombre) ? e.activado : e.normal }>
                            - {e.titulo}
                        </Link>))
                    }
                </div>
            </div>
        </div>
    );
}

const activo = [
    {titulo: "Organismos", normal: "py-2 hovTrans", activado: "py-2 text-white "},
    {titulo: "Programas", normal: "py-2 hovTrans", activado: "py-2 text-white"},
    {titulo: "Museos", normal: "py-2 hovTrans", activado: "py-2 text-white"},
    {titulo: "Institutos", normal: "py-2 hovTrans", activado: "py-2 text-white"},   
    {titulo: "Tramites", normal: "py-2 hovTrans", activado: "py-2 text-white"},
    {titulo: "Convocatorias", normal: "py-2 hovTrans", activado: "py-2 text-white"}
]