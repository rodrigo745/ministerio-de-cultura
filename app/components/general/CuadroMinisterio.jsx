import Image from 'next/image';
import IconoNext from "@/public/icono-next.svg";
import IconoReact from "@/public/icono-react.svg";

export default function CuadroMinisterio(){
    return(
        <div className='inicio-contenedor-cultura md:mr-5 md:w-1/3 flex flex-col '>
          <label className='text-2xl'>Ministerio de cultura</label>
          <label className='mt-5'>
          Esta página ha sido creada con el propósito de recopilar y presentar información obtenida directamente de la API del Ministerio de Cultura de la Nación Argentina. Aquí, los usuarios pueden explorar una variedad de categorías, incluyendo Organismos, Programas, Museos, Institutos y Trámites, lo que les permite acceder a datos relevantes de manera sencilla y organizada.
          </label>
          <label className='mt-5'>
          Además, ofrecemos un enlace directo a la página oficial del Ministerio de Cultura, brindando a los usuarios la oportunidad de acceder a información adicional de primera mano.
          </label>
          <a href='https://www.argentina.gob.ar/cultura' target="_blank" className='inicio-btn-oficial shadow-md btn-hover'>Página oficial</a>
          <label className='mt-10'>
          Hemos desarrollado esta página utilizando Next.js como nuestra tecnología principal, asegurando una experiencia de navegación eficiente y rápida.
          </label>
          <div className='mt-5 flex'>
            <Image src={IconoNext} width={50} height={50} alt='icono-next'/>
            <Image className='mx-5' src={IconoReact} width={50} height={50} alt='icono-next'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 66 66">
            <g id="Grupo_2" dataname="Grupo 2" transform="translate(105 -804)">
              <circle id="Elipse_8" dataname="Elipse 8" cx="33" cy="33" r="33" transform="translate(-105 804)"/>
              <text id="JS" transform="translate(-88 809)" fill="#fff" fontSize="38" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="41">JS</tspan></text>
            </g>
          </svg>

          </div>
        </div>
    );
}