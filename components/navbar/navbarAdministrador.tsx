
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ObtenerLogo } from '@/app/lib/basic_request';
import styles from '@/components/navbar/navbar.module.css';
import DropMenu from './dropmenu';

export default function NavbarAdministrador() {

	const [logo, setLogo] = useState('');
	const [nombreUsuario, setNombreUsuario] = useState('');
	const [barraDesplegada, setBarraDesplegada] = useState(false);

	// Agregar estado para el filtro
	const [filtro, setFiltro] = useState('');

	useEffect(() => {
		// Verificar que estamos en el cliente
		if (typeof window !== 'undefined') {
			const datosUsuarioJSON = localStorage.getItem('datosUsuario');
			if (datosUsuarioJSON) {
				const datosUsuario = JSON.parse(datosUsuarioJSON);
				setNombreUsuario(`${datosUsuario.nombre} ${datosUsuario.apellido}`);
			}
			const fetchLogo = async () => {
				setLogo(await ObtenerLogo());
			};
			fetchLogo();
		}
	}, []);

	useEffect(() => {
		// UseEffect para manejar el cambio en el filtro y actualizar el localStorage
		if (filtro && typeof window !== 'undefined') {
			localStorage.setItem('filtro', filtro);
		}
	}, [filtro]);

	const abrirBarraDesplegable = () => {
		setBarraDesplegada(true);
	};

	const cerrarBarraDesplegable = () => {
		setBarraDesplegada(false);
	};

	// UseEffect para manejar el cambio en el filtro y actualizar el localStorage
	useEffect(() => {
		if (filtro) {
			localStorage.setItem('filtro', filtro);
		}
	}, [filtro]);

	return (
		<nav className="bg-[#cd1919] p-4 md:flex md:justify-center text-xl">
			<div className={'container ' + styles.responsive_text}>
				<div className="md:flex max-md:flex-col sm:justify-center md:justify-between">
					<div className="flex items-center items-center justify-center">
						{logo != '' && <img
							src={logo}
							alt="Logo Liga de Boxeo de Norte de Santander"
							className="h-[125px] w-[125px] rounded-full bg-black"
						/>}
					</div>
					<ul className='flex space-x-10 my-4 text-white text-center items-center align-middle justify-center font-semibold' id='titulos-pequenos'>
						<li className='cursor-pointer' id='titulos-pequenos'>
							<DropMenu label={<a>Usuarios</a>}>
								<ul className=''>
									<li className='my-1'>
										<Link href='/administrador/lista-usuarios/entrenador'>
                    						Entrenadores
										</Link>
									</li>
									<div className="border-t border-gray-500"></div>
									<li className='my-1'>
										<Link href='/administrador/lista-usuarios/deportista'>
                    						Deportistas
										</Link>
									</li>
									<div className="border-t border-gray-500"></div>
									{/*<li className=' my-1'>
									<Link href='/administrador/lista-usuarios/externo' onClick={() => { cerrarListaUsuarios(); setFiltro('Externo'); }}>
                    EXTERNOS
									</Link>
			</li>*/}
								</ul>
							</DropMenu>
						</li>
						<li>
							<Link className='font-semibold' href='/administrador/calendario'>Calendario</Link>
						</li>
						<li>
							<Link className='font-semibold' href='/administrador/comunicados'>Comunicados</Link>
						</li>
						<li>
							<Link className='font-semibold' href='/administrador/ranking'>Ranking</Link>
						</li>
					</ul>
					<ul className="flex space-x-4 my-4 cursor-pointer justify-center align-middle items-center">
						<li className='flex text-white' id='titulos-pequenos' onClick={abrirBarraDesplegable}>
							<DropMenu label={<div className='flex align-middle items-center fill-white hover:fill-black space-x-5'>{nombreUsuario && <a>{nombreUsuario}</a>}<svg
								className="my-1"
								xmlns="http://www.w3.org/2000/svg"
								height="1em"
								viewBox="0 0 512 512"
							>
								<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
							</svg></div>}>
								<ul>
									<li className='my-1'>
										<Link href='/administrador/mi-perfil'>
                    					Mi perfil
										</Link>
									</li>
									<div className="border-t border-gray-500"></div>
									<li className='my-1'>
										<Link href='/administrador/administracion'>
                    				Administración
										</Link>
									</li>
									<div className="border-t border-gray-500"></div>
									<li className='text-[#cd1919] italic my-1'>
										<Link href='/'>
										Cerrar sesión
										</Link>
									</li>
								</ul>
							</DropMenu>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
