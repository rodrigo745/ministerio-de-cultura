import Link from 'next/link';


export default function CuadroCategorias(){
    return(
        <div className='inicio-contenedor-categorias md:w-2/3'>
          <label className='text-center text-2xl'>Categorias</label>
          <div className='grid grid-cols-2 md:grid-cols-3
                         justify-items-center md:px-5 xl:px-20 2xl:px-40'>
            {
                categorias.map(e=> (
                    <Link href={e.enlace} className='mt-10 text-center categoria-hover' key={e.id}>
                        <div className='contenedor-categoria-icono shadow-md mt-5'><div>{e.imagen}</div></div>
                        <div className='mt-4'>{e.titulo}</div>
                    </Link>
                ) )
            }
          </div>
      </div>
    );
}

const categorias = [
    {
        id: 1,
        titulo: "Organismos",
        enlace: "/categorias/Organismos",
        imagen: [
            <svg key={1} xmlns="http://www.w3.org/2000/svg" className=' w-20 sm:w-40 h-20 sm:h-24' viewBox="0 0 123.361 104.167">
            <path id="Trazado_3" dataname="Trazado 3" d="M16.669,41.2a342.476,342.476,0,0,0-2.782,35.968A275.565,275.565,0,0,1,60.531,102.16a275.565,275.565,0,0,1,46.65-24.991A342.625,342.625,0,0,0,104.4,41.2m-87.735,0Q9.2,38.69,1.6,36.593a339.478,339.478,0,0,1,58.93-33.1,339.458,339.458,0,0,1,58.93,33.095Q111.845,38.7,104.4,41.2m-87.735,0A287.291,287.291,0,0,1,60.531,60.139,287.322,287.322,0,0,1,104.393,41.2M30.78,68.7a4.25,4.25,0,1,0-4.25-4.25A4.25,4.25,0,0,0,30.78,68.7Zm0,0V47.876A313.82,313.82,0,0,1,60.531,31.544M20.823,97A33.894,33.894,0,0,0,30.78,72.952v-8.5" transform="translate(1.149 -0.743)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.5"/>
            </svg>
        ]
    },
    {
        id: 2,
        titulo: "Programas",
        enlace: "/categorias/Programas",
        imagen: [
            <svg key={2} xmlns="http://www.w3.org/2000/svg" className=' w-20 sm:w-40 h-20 sm:h-24' viewBox="0 0 109.583 100.91">
            <path id="Trazado_6" dataname="Trazado 6" d="M20.347,21.837V16.76A13.01,13.01,0,0,1,33.358,3.75H76.726a13.01,13.01,0,0,1,13.01,13.01v5.077m-69.389,0a12.987,12.987,0,0,1,4.337-.74H85.4a12.987,12.987,0,0,1,4.337.74m-69.389,0a13.01,13.01,0,0,0-8.674,12.27v5.077M89.736,21.837a13.01,13.01,0,0,1,8.674,12.27v5.077m0,0a12.987,12.987,0,0,0-4.337-.74H16.01a12.987,12.987,0,0,0-4.337.74m86.736,0a13.01,13.01,0,0,1,8.674,12.27V86.149a13.01,13.01,0,0,1-13.01,13.01H16.01A13.01,13.01,0,0,1,3,86.149V51.455a13.014,13.014,0,0,1,8.674-12.27" transform="translate(-0.25 -1)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.5"/>
            </svg>
        ]
    },
    {
        id: 3,
        titulo: "Museos",
        enlace: "/categorias/Museos",
        imagen: [
            <svg key={3} xmlns="http://www.w3.org/2000/svg" className=' w-20 sm:w-40 h-20 sm:h-24' viewBox="0 0 112.294 110.167">
            <path id="Trazado_4" dataname="Trazado 4" d="M55.333,107.667V59.694m21.806,47.972V59.694M33.528,107.667V59.694M3,37.889,55.333,3l52.333,34.889m-8.722,69.778V45.634a282.691,282.691,0,0,0-87.222,0v62.032m-8.722,0H107.667M55.333,24.806h.047v.047h-.047Z" transform="translate(0.814 -0.25)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.5"/>
            </svg>
        ]
    },
    {
        id: 4,
        titulo: "Institutos",
        enlace: "/categorias/Institutos",
        imagen: [
            <svg key={4} xmlns="http://www.w3.org/2000/svg" className=' w-20 sm:w-40 h-20 sm:h-24' viewBox="0 0 118.076 109.287">
            <path id="Trazado_5" dataname="Trazado 5" d="M58.042,3v98.708m0,0A68.51,68.51,0,0,0,34.094,106m23.948-4.292A68.51,68.51,0,0,1,81.989,106M96.667,14.273a278.707,278.707,0,0,0-77.25,0m77.25,0q8.669,1.227,17.167,2.976M96.667,14.273l14.992,61.377a5.715,5.715,0,0,1-3.37,6.878,34.536,34.536,0,0,1-23.244,0,5.724,5.724,0,0,1-3.376-6.878l15-61.371ZM2.25,17.248q8.5-1.742,17.167-2.976m0,0L34.409,75.649a5.715,5.715,0,0,1-3.37,6.878,34.536,34.536,0,0,1-23.244,0,5.724,5.724,0,0,1-3.376-6.878l15-61.371Z" transform="translate(0.996 -0.25)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.5"/>
            </svg>
        ]
    },
    {
        id: 5,
        titulo: "Tramites",
        enlace: "/categorias/Tramites",
        imagen: [
            <svg key={5} xmlns="http://www.w3.org/2000/svg" className=' w-20 sm:w-40 h-20 sm:h-24' viewBox="0 0 102.083 102.083">
            <path id="Trazado_8" dataname="Trazado 8" d="M74.4,13.774l8.69-8.695A9.659,9.659,0,0,1,96.754,18.74l-54.7,54.7a23.18,23.18,0,0,1-9.772,5.821L18.453,83.38l4.121-13.831a23.18,23.18,0,0,1,5.821-9.772l46.009-46Zm0,0L87.992,27.362M80.266,62.776V87.243a11.59,11.59,0,0,1-11.59,11.59H14.59A11.59,11.59,0,0,1,3,87.243V33.157a11.59,11.59,0,0,1,11.59-11.59H39.057" transform="translate(-0.25 0.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.5"/>
            </svg>

        ]
    },
    {
        id: 6,
        titulo: "Convocatorias",
        enlace: "/categorias/Convocatorias",
        imagen: [
            <svg key={6} xmlns="http://www.w3.org/2000/svg" className=' w-20 sm:w-40 h-20 sm:h-24' viewBox="0 0 113.591 113.5">
            <path id="Trazado_7" dataname="Trazado 7" d="M71.443,24.374a9.427,9.427,0,0,1,2.312-5.53,9.49,9.49,0,0,0,2.012-5.783c0-5.974-5.806-10.811-12.974-10.811S49.82,7.094,49.82,13.061a9.49,9.49,0,0,0,2.012,5.783,9.427,9.427,0,0,1,2.312,5.53h0a3.69,3.69,0,0,1-3.788,3.708q-12.034-.347-24-1.73a279.313,279.313,0,0,1,1.816,28.294,3.783,3.783,0,0,1-3.794,3.823h0a9.427,9.427,0,0,1-5.53-2.312,9.5,9.5,0,0,0-5.783-2.012c-5.974,0-10.811,5.806-10.811,12.974S7.094,80.092,13.061,80.092a9.49,9.49,0,0,0,5.783-2.012,9.427,9.427,0,0,1,5.53-2.312h0a3.06,3.06,0,0,1,3.068,3.287,277,277,0,0,1-3.7,29.153q13.129,1.643,26.616,2.041a3.69,3.69,0,0,0,3.788-3.708h0a9.427,9.427,0,0,0-2.312-5.53,9.5,9.5,0,0,1-2.012-5.783c0-5.968,5.812-10.811,12.974-10.811S75.768,89.26,75.768,95.228a9.49,9.49,0,0,1-2.012,5.783,9.419,9.419,0,0,0-2.306,5.53h0a3.334,3.334,0,0,0,3.517,3.344,277.35,277.35,0,0,0,31.293-3.633q2.35-13.508,3.356-27.2a3.068,3.068,0,0,0-3.073-3.287h0a9.427,9.427,0,0,0-5.53,2.312,9.49,9.49,0,0,1-5.783,2.012c-5.968,0-10.811-5.806-10.811-12.974S89.26,54.145,95.228,54.145a9.478,9.478,0,0,1,5.783,2.012,9.428,9.428,0,0,0,5.535,2.312h0a3.783,3.783,0,0,0,3.794-3.823,279.2,279.2,0,0,0-2.133-30.906A277.58,277.58,0,0,1,74.96,27.713a3.333,3.333,0,0,1-3.517-3.344h0Z" transform="translate(0.5 0.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.5"/>
            </svg>
        ]
    }
]
