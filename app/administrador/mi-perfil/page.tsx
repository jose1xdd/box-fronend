'use client';
import { useState, useEffect } from 'react';

import {
	Barlow_Semi_Condensed,
	Bebas_Neue,
	Exo_2
} from 'next/font/google';

const barlow = Barlow_Semi_Condensed({
	weight: ['500'],
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

interface FormData {
	nombre: string;
	apellido: string;
	cedula: string;
	direccion: string;
	telefono: string;
	correo: string;
	contrasenia: string;
  }

export default function PerfilAdministrador() {
	const formularioDatosPerfil: FormData = {
		nombre: 'Texto',
		apellido: 'Texto',
		cedula: 'Texto',
		direccion: 'Texto',
		telefono: 'Texto',
		correo: 'Texto',
		contrasenia: 'Texto'
	};

	const [datosPerfil, setDatosPerfil] = useState<FormData>(formularioDatosPerfil);
	const [esEditable, setEsEditable] = useState(false);

	const handleChange = (field: keyof FormData, value: string) => {
		setDatosPerfil((prevFormData) => ({
			...prevFormData,
			[field]: value
		}));
	};

	const handleToggleEdit = async () => {
		if(esEditable) {
			//await handleSaveChanges();
		}
		setEsEditable((prevEsEditable) => !prevEsEditable);
	};

	/*const handleSaveChanges = async () => {
		try {
			const response = await fetch('URL_DEL_SERVIDOR', {
				method: 'POST', // O el método que estés utilizando
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(datosPerfil),
			});

			if (response.ok) {
				// Aquí puedes manejar la respuesta del servidor si es necesario
				console.log('Cambios guardados exitosamente');
			} else {
				// Aquí puedes manejar errores de la solicitud al servidor
				console.error('Error al guardar cambios');
			}
		} catch (error) {
			console.error('Error en la solicitud:', error);
		}
	};*/

	return (
		<>
			<div className="container mx-auto mt-8">
				<h1 className={`${bebas.className} text-center text-[400%]`}>MI PERFIL</h1>
				<div className="p-4 max-w-5xl mx-auto flex">
					<div className="w-2/3 pr-4">
						<form>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
										Nombre:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									{esEditable ?
										(
											<input
												type="text"
												className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black`}
												value={datosPerfil.nombre}
												onChange={(e) => handleChange('nombre', e.target.value)}
											/>
										) : (
											<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
												{datosPerfil.nombre}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
										Apellido:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									{esEditable ?
										(
											<input
												type="text"
												className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black`}
												value={datosPerfil.apellido}
												onChange={(e) => handleChange('apellido', e.target.value)}
											/>
										) : (
											<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
												{datosPerfil.apellido}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
										Cedula:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									{esEditable ?
										(
											<input
												type="text"
												className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black`}
												value={datosPerfil.cedula}
												onChange={(e) => handleChange('cedula', e.target.value)}
											/>
										) : (
											<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
												{datosPerfil.cedula}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
										Dirección:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									{esEditable ?
										(
											<input
												type="text"
												className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black`}
												value={datosPerfil.direccion}
												onChange={(e) => handleChange('direccion', e.target.value)}
											/>
										) : (
											<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
												{datosPerfil.direccion}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
										Teléfono:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									{esEditable ?
										(
											<input
												type="text"
												className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black`}
												value={datosPerfil.telefono}
												onChange={(e) => handleChange('telefono', e.target.value)}
											/>
										) : (
											<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
												{datosPerfil.telefono}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
										Correo:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									{esEditable ?
										(
											<input
												type="text"
												className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black`}
												value={datosPerfil.correo}
												onChange={(e) => handleChange('correo', e.target.value)}
											/>
										) : (
											<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
												{datosPerfil.correo}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
										Contraseña:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									{esEditable ?
										(
											<input
												type="text"
												className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black`}
												value={datosPerfil.contrasenia}
												onChange={(e) => handleChange('contrasenia', e.target.value)}
											/>
										) : (
											<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
												{datosPerfil.contrasenia}
											</div>
										)
									}
								</div>
							</div>
							<div className="mt-5 flex justify-center">
								<button
									type="button"
									onClick={handleToggleEdit}
									className={`${exo.className} bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg`}
								>
									{esEditable ? 'Guardar cambios' : 'Editar información'}
								</button>
							</div>
						</form>
					</div>
					<div className="w-1/3 flex flex-col justify-center items-center">
						<svg
							className="my-1"
							xmlns="http://www.w3.org/2000/svg"
							height="15em"
							viewBox="0 0 512 512"
							fill="#ffffff"
						>
							<path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
						</svg>
						<button className={`${exo.className} bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg mt-4`}>
							Cargar nueva foto de perfil
						</button>
					</div>
				</div>
			</div>
		</>
	);
}