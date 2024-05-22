'use client';

import { obtenerFotoPerfil } from '@/app/lib/basic_request';
import OpcionesCategorias from '@/components/OpcionesCategorias';
import OpcionesClubes from '@/components/OpcionesClubes';
import { ModalImage } from '@/components/imgLoader/ModalImageInput/ModalImage';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '@/app/css/profiles.module.css';

interface FormData {
	name: string;
	lastName: string;
	phone: string;
	club: string;
	weightCategory: string;
	weight: number;
	image: string
  }

export default function EditarDeportista() {

	//TRAER ID DE USUARIO DE LA URL
	const valor = useSearchParams();
	const id = valor.get('id');
	const [viewModal, setViewModal] = useState(false);

	const [datosDeportista, setDatosDeportista] = useState<FormData>({
		name: '',
		lastName: '',
		phone: '',
		club: '',
		weightCategory: '',
		weight: 0,
		image: ''
	});

	const handleChange = (field: keyof FormData, value: string) => {
		setDatosDeportista((prevFormData) => ({
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
		const dataDeportista = await cargaDeportista(arreglo);
		if(id != null) setDatosDeportista({ ... dataDeportista.data.user, ['image']: await obtenerFotoPerfil(id) });
	};

	//Consumir endpoint
	const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
	async function cargaDeportista(datos: { token: any }): Promise<any> {
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

	const handleChangeImage = () => {
		setViewModal(true);
	};

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
				name: datosDeportista.name,
				lastName: datosDeportista.lastName,
				weight: Number(datosDeportista.weight),
				phone: datosDeportista.phone,
				club: datosDeportista.club,
				weightCategory: datosDeportista.weightCategory,
			};

			const response = await axios.patch(`${apiEndpoint}/users/Deportista`, body, {
				headers: cabeza,
				params: parametro,
			});
			window.location.href = `/administrador/info-usuario/deportista?id=${response.data.user._id}`;
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
			<div className={styles.container + 'container mx-auto mt-8'}>
				<h1 className='text-center text-[400%]' id='titulos-grandes'>EDITAR DEPORTISTA</h1>
				<div className='flex items-center justify-center my-4'>
					{datosDeportista.image != '' && <img src={datosDeportista.image} className='w-72 h-72'></img>}

				</div>
				<form>
					<div className="p-4 mx-auto md:flex">
						<div className="md:w-2/4 space-y-4 my-4">
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Nombre:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="text"
										name="nombre"
										value={datosDeportista.name}
										onChange={(e) => handleChange('name', e.target.value)}
										className='rounded-full border-black border-2 w-full pl-4 text-black'
									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Apellido:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="text"
										name="apellido"
										value={datosDeportista.lastName}
										onChange={(e) => handleChange('lastName', e.target.value)}
										className='rounded-full border-black border-2 w-full pl-4 text-black'
									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Peso
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="number"
										name="peso"
										value={datosDeportista.weight}
										onChange={(e) => handleChange('weight', e.target.value)}
										className='rounded-full border-black border-2 w-full pl-4 text-black'
										placeholder='Ingresa el peso'
									/>
								</div>
							</div>
						</div>
						<div className="md:w-2/4 space-y-4 my-4">
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Teléfono
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="text"
										name="telefono"
										value={datosDeportista.phone}
										onChange={(e) => handleChange('phone', e.target.value)}
										className='rounded-full border-black border-2 w-full pl-4 text-black'
									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                    Club:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<select
										name="club"
										value={datosDeportista.club}
										onChange={(e) => handleChange('club', e.target.value)}
										className='rounded-full border-black border-2 w-full pl-4 text-black'
									>
										<OpcionesClubes/>
									</select>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                    Categoria:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<select
										name="categoria"
										value={datosDeportista.weightCategory}
										onChange={(e) => handleChange('weightCategory', e.target.value)}
										className='rounded-full border-black border-2 w-full pl-4 text-black'
									>
										<OpcionesCategorias/>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-5 flex justify-center items-center">
						<button
							onClick={handleGuardarCambios}
							type="button"
							className='bg-[#cd1919] mx-5 w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'
						>
                            Guardar cambios
						</button>
						<button className='bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos' onClick={(event) => {
							event.preventDefault();
							handleChangeImage();
						}}>
							Cargar nueva foto de perfil
		  				</button>
					</div>
				</form>
				{(viewModal && id) && <ModalImage setView={setViewModal} id={id}></ModalImage>}
			</div>
		</>
	);
};