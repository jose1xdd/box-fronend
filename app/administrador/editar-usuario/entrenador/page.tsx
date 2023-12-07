'use client';

import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import {
	ChangeEvent,
	useEffect,
	useState
} from 'react';

interface FormData {
	name: string;
	lastName: string;
	phone: string;
	address: string;
  }

export default function EditarEntrenador() {

	//TRAER ID DE USUARIO DE LA URL
	const valor = useSearchParams();
	const id = valor.get('id');

	const [datosEntrenador, setDatosEntrenador] = useState<FormData>({
		name: '',
		lastName: '',
		phone: '',
		address: '',
	});

	const handleChange = (field: keyof FormData, value: string) => {
		setDatosEntrenador((prevFormData) => ({
			...prevFormData,
			[field]: value
		}));
	};

	//Método de cargar los usuarios del localStorage
	const cargarUsuarios = async () => {
		const datos = localStorage.getItem('userData');
		var arreglo;

		if (datos != null) {
			arreglo = JSON.parse(datos);
		}
		const dataDeportista = await cargaEntrenador(arreglo);
		setDatosEntrenador(dataDeportista.data.user);
	};

	//Consumir endpoint
	const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
	async function cargaEntrenador(datos: { token: any }): Promise<any> {
		try {
			const headers = {
				sessiontoken: datos.token
			};
			const parametros = {
				userId: id
			};

			const response = await axios.get(`${apiEndpoint}/users`, {
				params: parametros,
				headers: headers
			});

			return response;

			//console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	//FUNCIÓN PARA GUARDAR LA INFO Y ENVIAR A LA BASE DE DATOS
	async function handleGuardarCambios(): Promise<void> {
		const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
		try{
			const datos = localStorage.getItem('userData');
			var arreglo;

			if (datos != null) {
				arreglo = JSON.parse(datos);
			}

			const parametro = {
				userId: id,
			};

			const cabeza = {
				sessiontoken: arreglo.token,
			};

			const body = {
				name: datosEntrenador.name,
				lastName: datosEntrenador.lastName,
				address: datosEntrenador.address,
				phone: datosEntrenador.phone,
			};

			const response = await axios.patch(`${apiEndpoint}/users`, body, {
				headers: cabeza,
				params: parametro,
			});
			window.location.href = `/administrador/info-usuario/entrenador?id=${response.data.user._id}`;
		} catch (error) {
			console.log(error);
		}

	};

	//UseEffect para pruebas
	var cargado = false;
	useEffect(() => {
		cargarUsuarios();
		cargado = true;
	}, [!cargado]);

	return (
		<>
			<div className="container mx-auto mt-8">
				<h1 className='text-center text-[400%]' id='titulos-grandes'>EDITAR ENTRENADOR</h1>
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
										value={datosEntrenador.name}
										onChange={(e) => handleChange('name', e.target.value)}
										className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
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
										value={datosEntrenador.lastName}
										onChange={(e) => handleChange('lastName', e.target.value)}
										className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
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
										value={datosEntrenador.address}
										onChange={(e) => handleChange('address', e.target.value)}
										className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
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
										value={datosEntrenador.phone}
										onChange={(e) => handleChange('phone', e.target.value)}
										className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-5 flex justify-center">
						<button
							onClick={handleGuardarCambios}
							type="button"
							className='bg-[#cd1919] mx-5 w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'
						>
                            Guardar cambios
						</button>
						<button
							type="button"
							className='bg-[#cd1919] mx-5 w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'
						>
                            Cargar nueva foto de perfil
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

