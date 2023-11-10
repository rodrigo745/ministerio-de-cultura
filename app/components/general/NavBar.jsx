"use client";

import { useEffect, useState } from "react";
import "./navBar.css";
import Image from "next/image";
import IMinisterio from "@/public/icono-ministerio.svg";
import ModalNav from "./ModalNav";
import Link from "next/link";

export default function NavBar(){

    const [mostrarMenu, setMostrarMenu] = useState();
    const [ mostrarModal, setMostrarModal ] = useState();
    

    const agregarMenu = ()=>{
        (mostrarMenu == true) ? setMostrarMenu(false) : setMostrarMenu(true); 
    }

    // Obtener el redimencionamiento de la ventana
    const [anchoVentana, setAnchoVentana] = useState();
  
    useEffect(() => {
        if (typeof window !== 'undefined') {
          // El código dentro de esta condición se ejecutará solo en el navegador
          setAnchoVentana(window.innerWidth);
    
          function handleResize() {
            setAnchoVentana(window.innerWidth);
          }
    
          window.addEventListener('resize', handleResize);
    
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }
      }, []);

    // Modal
    const [ nuevoApartado, setNuevoApartado ] = useState();

    const showModal = (e)=> {
        const apartado = e.target.id;

        (mostrarModal == true) ? setMostrarModal(false) : setMostrarModal(true) ;
        
        if(apartado == "0" ||  apartado == "2"){
            setNuevoApartado("0");
        } else {
            setNuevoApartado("1");
        }
    }

    return(
        <nav className="ministerio-contenedor flex-col">
            <div className="ministerio-nav">
                <div >
                    <Image src={IMinisterio} width={40} height={40} 
                    alt="Icono del ministerio de cultura"/>
                </div>
                <div >
                    {
                    anchoVentana < 640 ? 
                    <div>
                            <button  onClick={agregarMenu}>
                                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                    </div> /* movil */
                    : 
                    <div>
                            <button className="btn-hover" onClick={showModal} id="0" name="apartado">Enlaces</button>
                            <button  onClick={showModal} id="1" name="apartado" className="mx-10 btn-hover">Desarrollador</button>
                            <Link href={"/"} className="btn-hover">Inicio</Link>
                    </div> /* Desktop */
                    }
                </div>
            </div>
            <div>
            {
                mostrarMenu &&
                <div className="mt-5">
                    <hr/><br/>
                    <button className="btn-hover" onClick={showModal} id="2" name="apartado">Enlaces</button> <br/><br/>
                    <button className="btn-hover" onClick={showModal} id="3" name="apartado">Desarrollador</button><br/><br/>
                    <Link href={"/"} className="btn-hover"> Inicio</Link>
                </div>
            }
            </div>
            {
                /* Agregar el modal aqui */
                mostrarModal && <ModalNav quitar={showModal} apartado={nuevoApartado}/>
            }
        </nav>
    );
}