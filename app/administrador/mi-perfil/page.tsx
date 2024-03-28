'use client';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { json } from 'stream/consumers';
interface FormData {
	nombre: string;
	apellido: string;
	cedula: string;
	direccion: string;
	telefono: string;
	correo: string;
	contrasenia: string;
  }

export default function Home() {

	var cargado = false;

	const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
	const [datosPerfil, setDatosPerfil] = useState({
		nombre: 'Texto',
		apellido: 'Texto',
		cedula: 'Texto',
		direccion: 'Texto',
		telefono: 'Texto',
		correo: 'Texto',
	});
	const [esEditable, setEsEditable] = useState(false);

	useEffect(() => {
		const datos = localStorage.getItem('userData');
		var arreglo;

		if (datos != null) {
			arreglo = JSON.parse(datos);
		}

		carga(arreglo);
		cargado = true;
	}, [!cargado]);

	//Método que hace el get de la base de datos
	async function carga(datos: { token: any; userId: any }): Promise<void> {
		try {
			const headers = {
				sessiontoken: datos.token
			};
			const parametros = {
				userId: datos.userId
			};

			const response = await axios.get(`${apiEndpoint}/users`, {
				params: parametros,
				headers: headers
			});

			// Actualizar el estado con los datos recibidos
			setDatosPerfil({
				nombre: response.data.user.name,
				apellido: response.data.user.lastName,
				cedula: response.data.user.cedula,
				direccion: response.data.user.address,
				telefono: response.data.user.phone,
				correo: response.data.user.email,
			});

			// Obtén los datos de nombre y apellido de tu variable "response"
			const nombre = response.data.user.name;
			const apellido = response.data.user.lastName;

			// Define un objeto con los datos que deseas guardar
			const datosUsuario = {
				nombre: nombre,
				apellido: apellido
			};

			// Convierte el objeto a una cadena JSON
			const datosUsuarioJSON = JSON.stringify(datosUsuario);

			// Guarda la cadena JSON en localStorage
			localStorage.setItem('datosUsuario', datosUsuarioJSON);
		} catch (error) {
			console.log(error);
		}
	}

	//método para poder realizar el cambio de datos:
	async function cambiar(datos: { token: any; userId: any}, info: { nombre: any; apellido: any; direccion: any; telefono: any }): Promise<void> {
		try {
			const headers = {
				sessiontoken: datos.token
			};
			const parametros = {
				userId: datos.userId
			};
			const cuerpo = {
				name: info.nombre,
				lastName: info.apellido,
				phone: info.telefono,
				address: info.direccion
			};

			console.log(parametros);
			console.log(headers);
			console.log(cuerpo);

			const response = await axios.patch(`${apiEndpoint}/users`, cuerpo, {
				params: parametros,
				headers: headers
			});

			// Actualizar el estado con los datos recibidos
		} catch (error) {
			console.log(error);
		}
	}

	const handleChange = (field: keyof FormData, value: string) => {
		setDatosPerfil((prevFormData) => ({
			...prevFormData,
			[field]: value
		}));
	};

	const handleToggleEdit = async () => {
		if (!esEditable) {
			console.log(datosPerfil);
		}
		else{
			const datos = localStorage.getItem('userData');
			var arreglo;

			if (datos != null) {
				arreglo = JSON.parse(datos);
			}
			cambiar(arreglo, datosPerfil);
		}
		setEsEditable((prevEsEditable) => !prevEsEditable);
	};

	return (
		<>
			<div className="container mx-auto mt-8">
				<h1 className='text-center text-[400%]' id='titulos-grandes'>MI PERFIL</h1>
				<div className="p-4 max-w-5xl mx-auto flex">
					<div className="w-2/3 pr-4">
						<form>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										Nombre:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									{esEditable ?
										(
											<input
												type="text"
												className='bg-white rounded-full w-full h-10 mx-5 my-2 text-center text-black' id='texto-general'
												value={datosPerfil.nombre}
												onChange={(e) => handleChange('nombre', e.target.value)}
											/>
										) : (
											<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
												{datosPerfil.nombre}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										Apellido:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									{esEditable ?
										(
											<input
												type="text"
												className='bg-white rounded-full w-full h-10 mx-5 my-2 text-center text-black' id='texto-general'
												value={datosPerfil.apellido}
												onChange={(e) => handleChange('apellido', e.target.value)}
											/>
										) : (
											<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
												{datosPerfil.apellido}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										Cedula:
									</div>
								</div>
								<div className="w-2/3 mx-2">

									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										{datosPerfil.cedula}
									</div>

								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										Dirección:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									{esEditable ?
										(
											<input
												type="text"
												className='bg-white rounded-full w-full h-10 mx-5 my-2 text-center text-black' id='texto-general'
												value={datosPerfil.direccion}
												onChange={(e) => handleChange('direccion', e.target.value)}
											/>
										) : (
											<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
												{datosPerfil.direccion}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										Teléfono:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									{esEditable ?
										(
											<input
												type="text"
												className='bg-white rounded-full w-full h-10 mx-5 my-2 text-center text-black' id='texto-general'
												value={datosPerfil.telefono}
												onChange={(e) => handleChange('telefono', e.target.value)}
											/>
										) : (
											<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
												{datosPerfil.telefono}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										Correo:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										{datosPerfil.correo}
									</div>
								</div>
							</div>
							<div className="mt-5 flex justify-center">
								<button
									type="button"
									onClick={handleToggleEdit}
									className='bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'
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
						<button className='bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg mt-4' id='titulos-pequenos'>
							Cargar nueva foto de perfil
						</button>
					</div>
				</div>
			</div>
		</>
	);
}