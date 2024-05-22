'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import {
	ChangeEvent,
	FormEvent,
	useState
} from 'react';

interface FormData {
  nombre: string;
  descripcion: string;
}

export default function CrearClub() {
	const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
	const [repetido, setRepetido] = useState(false);
	const [creado, setCreado] = useState(false);
	const [datosNuevoClub, setDatosNuevoClub] = useState<FormData>({
		nombre: '',
		descripcion: ''
	});
	const router = useRouter();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setDatosNuevoClub((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const CrearClub = async (token: string, club:FormData) => {
		try {
			const headers = {
				sessiontoken: token,
			};
			const body = {
				name: club.nombre,
				description: club.descripcion
			};
			const response = await axios.post(`${apiEndpoint}/club`, body, { headers: headers });
			setCreado(true);
		} catch (error) {
			setRepetido(true);
		}
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const datos = localStorage.getItem('userData');
		let token;
		if(datos != null){
			token = JSON.parse(datos).token;
		}
		CrearClub(token, datosNuevoClub);
	};

	return (
		<>
			<div className="container mx-auto mt-8">
				<h1 className='text-center text-[400%]' id='titulos-grandes'>CREAR CLUB</h1>
				<div className='flex items-center justify-center'>
					<svg
						className="my-1"
						xmlns="http://www.w3.org/2000/svg"
						height="6em"
						viewBox="0 0 640 512"
						fill="#ffffff"
					>
						<path d="M0 24C0 10.7 10.7 0 24 0H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 48 0 37.3 0 24zM0 488c0-13.3 10.7-24 24-24H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zM83.2 160a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM32 320c0-35.3 28.7-64 64-64h96c12.2 0 23.7 3.4 33.4 9.4c-37.2 15.1-65.6 47.2-75.8 86.6H64c-17.7 0-32-14.3-32-32zm461.6 32c-10.3-40.1-39.6-72.6-77.7-87.4c9.4-5.5 20.4-8.6 32.1-8.6h96c35.3 0 64 28.7 64 64c0 17.7-14.3 32-32 32H493.6zM391.2 290.4c32.1 7.4 58.1 30.9 68.9 61.6c3.5 10 5.5 20.8 5.5 32c0 17.7-14.3 32-32 32h-224c-17.7 0-32-14.3-32-32c0-11.2 1.9-22 5.5-32c10.5-29.7 35.3-52.8 66.1-60.9c7.8-2.1 16-3.1 24.5-3.1h96c7.4 0 14.7 .8 21.6 2.4zm44-130.4a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM321.6 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
					</svg>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="max-w-xl mx-auto my-5">
						<div className="flex">
							<div className="w-1/3 m-0">
								<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                        Nombre:
								</div>
							</div>
							<div className="w-2/3 mx-2" id='texto-general'>
								<input
									type="text"
									name="nombre"
									required
									value={datosNuevoClub.nombre}
									onChange={handleInputChange}
									className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
									placeholder='Ingrese el nombre'
								/>
							</div>
						</div>
						<div className="flex">
							<div className="w-1/3 m-0">
								<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                        Descripción:
								</div>
							</div>
							<div className="w-2/3 mx-2" id='texto-general'>
								<input
									type="text"
									name="descripcion"
									required
									value={datosNuevoClub.descripcion}
									onChange={handleInputChange}
									className='bg-neutral-200 rounded-lg w-full h-40 mx-5 my-2 pl-4 text-black'
									placeholder='Ingrese la descripción'
								/>
							</div>
						</div>
					</div>
					<div className="mt-5 flex justify-center">
						<button
							type="submit"
							className='bg-[#cd1919] mx-5 w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'
						>
                            Crear club
						</button>
						<button
							type="button"
							className='bg-[#cd1919] mx-5 w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'
						>
                            Cargar logo del club
						</button>
					</div>
				</form>
				{repetido && (
					<div className="fixed inset-0 flex items-center justify-center z-50">
						<div className="bg-[#141414] p-10 rounded-lg">
							<h3 className="text-white text-center mb-4 text-[175%]" id='titulos-grandes'>
								Ya existe un club con ese nombre, intenta con otro
							</h3>
							<div className="flex justify-center">
								<button
									onClick={()=>setRepetido(false)}
									className="bg-[#cd1919] w-full h-10 text-white py-2 px-4 mx-2 rounded-lg"
									id="titulos-pequenos"
								>
								Aceptar
								</button>
							</div>
						</div>
					</div>
				)}
				{creado && (
					<div className="fixed inset-0 flex items-center justify-center z-50">
						<div className="bg-[#141414] p-10 rounded-lg">
							<h3 className="text-white text-center mb-4 text-[175%]" id='titulos-grandes'>
								Club creado con exito
							</h3>
							<div className="flex justify-center">
								<button
									onClick={()=>router.push('/administrador/administracion/gestionar-clubes')}
									className="bg-[#cd1919] w-full h-10 text-white py-2 px-4 mx-2 rounded-lg"
									id="titulos-pequenos"
								>
								Volver
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};