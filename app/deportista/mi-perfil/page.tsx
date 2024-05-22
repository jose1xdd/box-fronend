'use client';
import { obtenerFotoPerfil } from '@/app/lib/basic_request';
import { ModalImage } from '@/components/imgLoader/ModalImageInput/ModalImage';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface FormData {
	nombre: string;
	apellido: string;
	cedula: string;
	direccion: string;
	telefono: string;
	correo: string;
	contrasenia: string;
	imagen: string;
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
		imagen: ''
	});
	const [esEditable, setEsEditable] = useState(false);

	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		const datos = localStorage.getItem('userData');
		var json;

		if (datos != null) {
			json = JSON.parse(datos);
		}

		carga(json);

		cargado = true;
	}, [!cargado]);

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
			const tmp_user = ({
				nombre: response.data.user.name,
				apellido: response.data.user.lastName,
				cedula: response.data.user.cedula,
				direccion: response.data.user.address,
				telefono: response.data.user.phone,
				correo: response.data.user.email,
			});

			setDatosPerfil({ ...tmp_user, ['imagen']: await obtenerFotoPerfil() });
		} catch (error) {
			console.log(error);
		}
	}

	//método para poder realizar cambio de datos:
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

	const handleChangeImage = () => {
		setModalVisible(true);
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
						{datosPerfil.imagen != '' && <img src={datosPerfil.imagen} className='w-64 h-64'/>}
						<button className='bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg mt-4' id='titulos-pequenos' onClick={handleChangeImage}>
							Cargar nueva foto de perfil
		  				</button>
					</div>
					{modalVisible && <ModalImage setView={setModalVisible}></ModalImage>}
				</div>
			</div>
		</>
	);
}
