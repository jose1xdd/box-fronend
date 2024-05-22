'use client';

import fechaCompleta from '@/app/types/funcionesDate';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import styles from '@/app/css/profiles.module.css';

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
			<div className={styles.container + ' container mx-auto mt-8'}>
				<h1 className='text-center text-[400%]' id='titulos-grandes'>CREAR ENTRENADOR</h1>
				<div className='flex items-center justify-center'>
					<svg
						className="my-1"
						xmlns="http://www.w3.org/2000/svg"
						height="6em"
						viewBox="0 0 512 512"
						fill="#000000"
					>
						<path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
					</svg>
				</div>
				<form className=''>
					<div className="md:p-4 mx-auto md:space-x-10 mt-4 md:flex">
						<div className="md:w-2/4 md:pr-4">
							<div className="flex responsive_text">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
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
							<div className="flex responsive_text">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
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
							<div className="flex responsive_text">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
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
							<div className="flex responsive_text">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
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
						<div className="md:w-2/4 md:pr-4">
							<div className="flex responsive_text">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
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
							<div className="flex responsive_text">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
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
							<div className="flex responsive_text">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
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
					</div>
				</form>
			</div>
		</>
	);
};

