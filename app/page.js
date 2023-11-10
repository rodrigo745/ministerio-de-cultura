import "./globals.css";
import CuadroMinisterio from './components/general/CuadroMinisterio';
import CuadroCategorias from './components/general/CuadroCategorias';

export default function HomePage(){
  return(
    <div>
      <div className='inicio-contenedor-mayor md:flex md:h-1/2'>
        {/* Ministerio */}
        <CuadroMinisterio/>
        {/* Categorias */}
        <CuadroCategorias/>
      </div>
    </div>
  );
}