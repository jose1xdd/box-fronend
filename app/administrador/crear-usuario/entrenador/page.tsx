'use client';

import fechaCompleta from '@/app/types/funcionesDate';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';

interface FormData {
  nombre: string;
  apellido: string;
  nacimiento: Date;
  cedula: string;
  direccion: string;
  telefono: string;
  correo: string;
}

export default function CrearEntrenador() {

	const [datosNuevoEntrenador, setDatosNuevoEntrenador] = useState<FormData>({
		nombre: '',
		apellido: '',
		nacimiento: new Date(),
		cedula: '',
		direccion: '',
		telefono: '',
		correo: '',
	});

	const handleChange = (field: keyof FormData, value: string) => {
		setDatosNuevoEntrenador((prevFormData) => ({
			...prevFormData,
			[field]: value
		}));
	};

	const handleChangeFecha = (field: keyof FormData, value: string) => {
		var fecha = new Date(value);
		setDatosNuevoEntrenador((prevFormData) => ({
			...prevFormData,
			[field]: fecha
		}));
	};

	async function handleGuardarCambios(): Promise<void> {
		const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
		try{
			const datos = localStorage.getItem('userData');
			var arreglo;

			if (datos != null) {
				arreglo = JSON.parse(datos);
			}

			const cabeza = {
				sessiontoken: arreglo.token,
			};

			const body = {
				name: datosNuevoEntrenador.nombre,
				lastName: datosNuevoEntrenador.apellido,
				birthDate: fechaCompleta(datosNuevoEntrenador.nacimiento),
				cedula: datosNuevoEntrenador.cedula,
				email: datosNuevoEntrenador.correo,
				phone: datosNuevoEntrenador.telefono,
				address: datosNuevoEntrenador.direccion
			};

			const response = await axios.post(`${apiEndpoint}/users/Entrenador`, body, {
				headers: cabeza,
			});
			window.location.href = `/administrador/info-usuario/entrenador?id=${response.data.user._id}`;
		} catch (error) {
			console.log(error);
		}

	};

	return (
		<>
			<div className="container mx-auto mt-8">
				<h1 className='text-center text-[400%]' id='titulos-grandes'>CREAR ENTRENADOR</h1>
				<div className='flex items-center justify-center'>
					<svg
						className="my-1"
						xmlns="http://www.w3.org/2000/svg"
						height="6em"
						viewBox="0 0 512 512"
						fill="#ffffff"
					>
						<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
					</svg>
				</div>
				<form>
					<div className="p-4 max-w-5xl mx-auto flex">
						<div className="w-2/4 pr-4">
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                        Nombre:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="text"
										name="nombre"
										value={datosNuevoEntrenador.nombre}
										onChange={(e) => handleChange('nombre', e.target.value)}
										className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
										placeholder='Ingrese el nombre'
									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                        Apellido:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="text"
										name="apellido"
										value={datosNuevoEntrenador.apellido}
										onChange={(e) => handleChange('apellido', e.target.value)}
										className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
										placeholder='Ingrese el apellido'
									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                        Cédula:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="text"
										name="cedula"
										value={datosNuevoEntrenador.cedula}
										onChange={(e) => handleChange('cedula', e.target.value)}
										className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
										placeholder='Ingrese el número de cedula'
									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                        Fecha de nacimiento
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="date"
										name="fecha"
										value={fechaCompleta(datosNuevoEntrenador.nacimiento)}
										onChange={(e) => handleChangeFecha('nacimiento', e.target.value)}
										className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
										min="1900-01-01"
										required
									/>
								</div>
							</div>
						</div>
						<div className="w-2/4 pr-4">
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                        Dirección
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="text"
										name="direccion"
										value={datosNuevoEntrenador.direccion}
										onChange={(e) => handleChange('direccion', e.target.value)}
										className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
										placeholder='Ingrese la dirección'
									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                        Teléfono
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="text"
										name="telefono"
										value={datosNuevoEntrenador.telefono}
										onChange={(e) => handleChange('telefono', e.target.value)}
										className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
										placeholder='Ingrese el teléfono'
									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                        Correo
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="text"
										name="correo"
										value={datosNuevoEntrenador.correo}
										onChange={(e) => handleChange('correo', e.target.value)}
										className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
										placeholder='Ingrese el correo'
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-5 flex justify-center">
						<button
							type="button"
							onClick={handleGuardarCambios}
							className='bg-[#cd1919] mx-5 w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'
						>
                            Crear entrenador
						</button>
						<button
							type="button"
							className='bg-[#cd1919] mx-5 w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'
						>
                            Cargar foto de perfil
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

