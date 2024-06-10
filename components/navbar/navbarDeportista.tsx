'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/images/logo.png';
import { ObtenerLogo } from '@/app/lib/basic_request';
import styles from '@/components/navbar/navbar.module.css';
import DropMenu from './dropmenu';

export default function NavbarDeportista() {

	const [logo, setLogo] = useState('');
<<<<<<< HEAD

=======
	const [barraDesplegada, setBarraDesplegada] = useState(false);
>>>>>>> origin/main
	const [nombreUsuario, setNombreUsuario] = useState('');

	useEffect(() => {
		// Verificar que estamos en el cliente
		if (typeof window !== 'undefined') {
			const datosUsuarioJSON = localStorage.getItem('datosUsuario');
			if (datosUsuarioJSON) {
				const datosUsuario = JSON.parse(datosUsuarioJSON);
				// Actualizar el estado con el nombre y apellido del usuario
				setNombreUsuario(`${datosUsuario.nombre} ${datosUsuario.apellido}`);
			}
			const fetchLogo = async () => {
				setLogo(await ObtenerLogo());
			};
			fetchLogo();
		}
	}, []);

	return (
<<<<<<< HEAD

		<><nav className="bg-[#cd1919] p-4 md:flex md:justify-center text-xl">
			<div className={'container ' + styles.responsive_text}>
				<div className="md:flex max-md:flex-col sm:justify-center md:justify-between">
					<div className="flex items-center items-center justify-center">
						{logo != '' && <img
							src={logo}
							alt="Logo Liga de Boxeo de Norte de Santander"
							className="h-[125px] w-[125px] rounded-full bg-black"
						/>}
=======
		<nav className="bg-[#1e1e1e] p-4">
			<div className="container">
				<div className="flex justify-between">
					<div className="flex items-center">
						<div className="text-white font-bold text-xl">
							<div className="flex items-center">
								<div className="w-60 h-60 bg-[#141414] rounded-full flex items-center justify-center mr-4 absolute -top-14 -left-14">
									{logo && <Image
										width={125}
										height={125}
										src={logo}
										alt="Logo Liga de Boxeo de Norte de Santander"
										className="transform translate-x-[10px] translate-y-[20px] h-[125px] w-[125px] rounded-full"
									/>}
								</div>
							</div>
						</div>
>>>>>>> origin/main
					</div>
					<ul className='flex space-x-10 my-4 text-white text-center items-center align-middle justify-center' id='titulos-pequenos'>
						<li>
							<Link href='/deportista/calendario'>CALENDARIO</Link>
						</li>
						<li>
							<Link href='/deportista/ranking'>RANKING</Link>
						</li>
					</ul>
					<ul className="flex space-x-4 my-4 cursor-pointer justify-center align-middle items-center">
						<li className='flex text-white' id='titulos-pequenos'>
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
										<Link href='/deportista/mi-perfil'>
                    					Mi perfil
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
<<<<<<< HEAD
=======

			{barraDesplegada && (
				<>
					<div className="fixed inset-0">
						<div
							className='w-[14%] absolute right-10 top-16 px-1 bg-[#1e1e1e] border border-gray-500 rounded shadow text-center' id='titulos-pequenos'
						>
							<button
								className="absolute top-0 right-0 mx-1 cursor-pointer"
								onClick={cerrarBarraDesplegable}
							>
                                X
							</button>
							<ul>
								<li className='my-1'>
									<Link href='/deportista/mi-perfil'>
                                        Mi perfil
									</Link>
								</li>
								<div className="border-t border-gray-500"></div>
								<div className="border-t border-gray-500"></div>
								<li className='text-[#cd1919] italic my-1'>
									<Link href='/'>
                                        Cerrar sesión
									</Link>
								</li>
							</ul>
						</div>
						<div
							className="bg-transparent"
							onClick={cerrarBarraDesplegable}
						/>
					</div>
				</>
			)}

>>>>>>> origin/main
		</nav>
		</>
	);
}
