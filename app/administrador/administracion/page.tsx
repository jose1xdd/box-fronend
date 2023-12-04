'use client';

import Image from 'next/image';
import cambiarLogo from '@/public/images/cambiarLogo.png';
import administrarCategorias from '@/public/images/administrarCategorias.png';
import evaluacionFisica from '@/public/images/evaluacionFisica.png';
import gestionarRoles from '@/public/images/gestionarRoles.png';
import gestionarClubes from '@/public/images/gestionarClubes.png';
import gestionarIndex from '@/public/images/gestionarIndex.png';

export default function AdministracionAdmin() {

	return (
		<>
			<div className="container mx-auto mt-8">
				<h1 className='text-center text-[400%]' id='titulos-grandes'>MENÚ DE ADMINISTRADOR</h1>
				<div className="p-4 max-w-5xl mx-auto flex">
					<div className="w-1/3 pr-4 m-0">
						<div className='m-0 my-5'>
							<div className='flex items-center justify-center'> <Image
								src={cambiarLogo}
								alt="Logo Liga de Boxeo de Norte de Santander"
								width={200}
								priority
							/>
							</div>
							<div className='flex items-center justify-center mt-3 mb-5'>
								<button className='bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'>
							        Cambiar logo
								</button>
							</div>
						</div>
						<div className='mx-0 my-5'>
							<div className='flex items-center justify-center'>
								<Image
									src={administrarCategorias}
									alt="Logo Liga de Boxeo de Norte de Santander"
									width={200}
									priority
								/>
							</div>
							<div className='flex items-center justify-center mt-3'>
								<button className='bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'>
							        Administrar categorías
								</button>
							</div>
						</div>
					</div>
					<div className="w-1/3 pr-4 m-0">
						<div className='m-0 my-5'>
							<div className='flex items-center justify-center'>
								<Image
									src={evaluacionFisica}
									alt="Logo Liga de Boxeo de Norte de Santander"
									width={200}
									priority
								/>
							</div>
							<div className='flex items-center justify-center mt-3'>
								<button className='bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'>
							        Evaluación física
								</button>
							</div>
						</div>
						<div className='mx-0 my-5'>
							<div className='flex items-center justify-center'>
								<Image
									src={gestionarRoles}
									alt="Logo Liga de Boxeo de Norte de Santander"
									width={200}
									priority
								/>
							</div>
							<div className='flex items-center justify-center mt-3'>
								<button className='bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'>
							        Gestionar roles
								</button>
							</div>
						</div>
					</div>
					<div className="w-1/3 pr-4 m-0">
						<div className='m-0 my-5'>
							<div className='flex items-center justify-center'>
								<Image
									src={gestionarClubes}
									alt="Logo Liga de Boxeo de Norte de Santander"
									width={200}
									priority
								/>
							</div>
							<div className='flex items-center justify-center mt-3'>
								<button className='bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'>
							        Gestionar clubes
								</button>
							</div>
						</div>
						<div className='mx-0 my-5'>
							<div className='flex items-center justify-center'>
								<Image
									src={gestionarIndex}
									alt="Logo Liga de Boxeo de Norte de Santander"
									width={200}
									priority
								/>
							</div>
							<div className='flex items-center justify-center mt-3'>
								<button className='bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'>
							        Gestionar index
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}