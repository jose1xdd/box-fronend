'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/images/logo.png';

import {
	Barlow_Semi_Condensed,
	Bebas_Neue,
	Exo_2
} from 'next/font/google';

const barlow = Barlow_Semi_Condensed({
	weight: ['100'],
	subsets: ['latin']
});

const bebas = Bebas_Neue({
	weight: ['400'],
	subsets: ['latin']
});

const exo = Exo_2({
	weight: ['100'],
	subsets: ['latin']
});

export default function NavbarDeportista() {
	const [barraDesplegada, setBarraDesplegada] = useState(false);

	const abrirBarraDesplegable = () => {
		setBarraDesplegada(true);
	};

	const cerrarBarraDesplegable = () => {
		setBarraDesplegada(false);
	};

	return (
		<nav className="bg-[#1e1e1e] p-4">
			<div className="container">
				<div className="flex justify-between">
					<div className="flex items-center">
						<div className="text-white font-bold text-xl">
							<div className="flex items-center">
								<div className="w-60 h-60 bg-[#141414] rounded-full flex items-center justify-center mr-4 absolute -top-14 -left-14">
									<Image
										src={Logo}
										alt="Logo Liga de Boxeo de Norte de Santander"
										className="transform translate-x-[10px] translate-y-[20px]"
										width={125}
										height={25}
										priority
									/>
								</div>
							</div>
						</div>
					</div>
					<ul className={`${exo.className} flex space-x-5 my-4 text-white`}>
						<li>
							<Link href='/deportista/calendario'>CALENDARIO</Link>
						</li>
						<li>
							<Link href='/deportista/ranking'>RANKING</Link>
						</li>
					</ul>
					<ul className="flex space-x-4 my-4 cursor-pointer">
						<li className={`${exo.className} flex text-white`} onClick={abrirBarraDesplegable}>
							<div>Nombre del usuario</div>
						</li>
						<svg
							className="my-1"
							xmlns="http://www.w3.org/2000/svg"
							height="1em"
							viewBox="0 0 512 512"
							fill="#ffffff"
							onClick={abrirBarraDesplegable}
						>
							<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
						</svg>
					</ul>
				</div>
			</div>

			{barraDesplegada && (
				<>
					<div className="fixed inset-0">
						<div
							className={`${exo.className} w-[14%] absolute right-10 top-16 px-1 bg-[#1e1e1e] border border-gray-500 rounded shadow text-center`}
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

		</nav>
	);
}
