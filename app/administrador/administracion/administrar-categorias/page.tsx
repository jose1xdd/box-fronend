'use client';

import React, {
	FormEvent,
	useEffect,
	useState
} from 'react';
import { LoaderContenido } from '@/components/loaderContenido';
import Tabla from '@/components/tablas/categorias';
import axios from 'axios';
import sharp from 'sharp';
import Link from 'next/link';

type InputName = 'min' | 'max';
interface categoria {
	_id: string,
	name: string,
	maxWeight: number,
	minWeight: number,
}

export default function AdministrarCategorias() {
	const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
	const [categoria, setCategoria] = useState('');
	const [categorias, setCategorias] = useState<categoria[]>([]);
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(1);
	const [checkPeso, setCheckPeso] = useState(false);
	const [checkData, setCheckData] = useState(false);
	const [repetido, setRepetido] = useState(false);

	const increment = (inputName: InputName): void => {
		if (inputName === 'min') {
			setMin(min + 1);
		} else if (inputName === 'max') {
			setMax(max + 1);
		}
	};

	const decrement = (inputName: InputName): void => {
		if (inputName === 'min' && min > 0) {
			setMin(min - 1);
		} else if (inputName === 'max' && max > 0) {
			setMax(max - 1);
		}
	};

	const handleCategoriaChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setCategoria(e.target.value);
	};

	const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const newValue = parseInt(e.target.value, 10);
		setMin(isNaN(newValue) ? 0 : newValue);
	};

	const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const newValue = parseInt(e.target.value, 10);
		setMax(isNaN(newValue) ? 0 : newValue);
	};
	const getCategorias = async (token:string) => {
		try {
			const headers = {
				sessiontoken: token,
			};

			const response = await axios.get(`${apiEndpoint}/weightCategory/List`, {
				headers: headers,
			});
			return response.data.weightCategory;
		} catch (error) {
			console.log(error);
		}
	};
	const cargarCategorias = async () => {
		const datos = localStorage.getItem('userData');
		let token;
		if(datos != null){
			token = JSON.parse(datos).token;
		}
		setCategorias(await getCategorias(token));
	};

	const crearCategoria = async (token: string) => {
		try {
			const headers = {
				sessiontoken: token,
			};
			const body = {
				name: categoria,
				maxWeight: max,
				minWeight: min
			};

			const response = await axios.post(`${apiEndpoint}/weightCategory`, body, {
				headers: headers,
			});
			cargarCategorias();
		} catch (error) {
			setRepetido(true);
		}
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if(checkPeso){
			setCheckData(true);
		}else{
			const datos = localStorage.getItem('userData');
			let token;
			if(datos != null){
				token = JSON.parse(datos).token;
			}
			crearCategoria(token);
		}
	};

	useEffect(()=>{
		cargarCategorias();
	}, []);

	useEffect(()=>{
		setCheckPeso(min >= max);
	}, [min, max]);
	return (
		<>
			{categorias.length == 0 && (<LoaderContenido></LoaderContenido>)}
			{categorias.length != 0 && (<div><div className='w-[80%] mx-auto mt-[6%]'>
				<h1 className='text-[300%]' id='textos-grandes'>
					CATEGORÍAS
				</h1>
			</div>
			<Tabla categorias={categorias} cargarCategorias={()=>cargarCategorias()}/>
			<div className='w-[80%] mx-auto mt-5'>
				<form className='flex col' onSubmit={handleSubmit}>
					<div className='w-2/4'>
						<div className='flex items-center justify-center'>
							<label className='block mb-2 tex-center text-[150%]' id='titulos-grandes'>NOMBRE DE LA CATEGORÍA</label>
						</div>
						<input
							type='text'
							value={categoria}
							required
							onChange={handleCategoriaChange}
							className="bg-neutral-200 rounded-full w-full h-10 pl-5 text-black"
							id="texto-general"
							placeholder="Ingrese el nombre de la categoría de peso que desea agregar"
						/>
					</div>
					<div className='w-1/4 mx-4'>
						<div className='flex items-center justify-center'>
							<label className='block mb-2 tex-center text-[150%]' id='titulos-grandes'>MIN</label>
						</div>
						<div className='flex items-center'>
							<button
								type='button'
								onClick={() => decrement('min')}
								className='p-2'
							>
								-
							</button>
							<input
								type='text'
								value={min}
								required
								onChange={handleMinChange}
								className="bg-neutral-200 rounded-full w-full h-10 text-black text-center"
								id="texto-general"
							/>
							<button
								type='button'
								onClick={() => increment('min')}
								className='p-2'
							>
								+
							</button>
						</div>
					</div>
					<div className='w-1/4'>
						<div className='flex items-center justify-center'>
							<label className='block mb-2 tex-center text-[150%]' id='titulos-grandes'>MAX</label>
						</div>
						<div className='flex items-center'>
							<button
								type='button'
								onClick={() => decrement('max')}
								className='p-2'
							>
								-
							</button>
							<input
								type='text'
								value={max}
								required
								onChange={handleMaxChange}
								className="bg-neutral-200 rounded-full w-full h-10 text-black text-center"
								id="texto-general"
							/>
							<button
								type='button'
								onClick={() => increment('max')}
								className='p-2'
							>
								+
							</button>
						</div>
					</div>
					<div className='flex items-center justify-center'>
						<button
							type="submit"
							className='bg-[#cd1919] mx-5 w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'
						>
					Agregar categoría de peso
						</button>
					</div>
				</form>
				{checkPeso && (
					<div className='mt-5'>
						<h3 className="text-[#cd1919] text-center mb-4 text-[175%]" id='titulos-grandes'>
								El peso máximo no puede ser menor al peso minimo
						</h3>
					</div>
				)}
				{checkData && (
					<div className="fixed inset-0 flex items-center justify-center z-50">
						<div className="bg-[#141414] p-10 rounded-lg">
							<h3 className="text-white text-center mb-4 text-[175%]" id='titulos-grandes'>
								La información solicitada no cumple con todos los requsitos
							</h3>
							<div className="flex justify-center">
								<button
									onClick={()=>setCheckData(false)}
									className="bg-[#cd1919] w-full h-10 text-white py-2 px-4 mx-2 rounded-lg"
									id="titulos-pequenos"
								>
								Aceptar
								</button>
							</div>
						</div>
					</div>
				)}
				{repetido && (
					<div className="fixed inset-0 flex items-center justify-center z-50">
						<div className="bg-[#141414] p-10 rounded-lg">
							<h3 className="text-white text-center mb-4 text-[175%]" id='titulos-grandes'>
								Ya existe una categoria de peso con ese nombre o limite de pesos, intenta con otros
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
			</div>
			<div className="flex justify-center mt-8">
				<Link href="../administracion" className="bg-[#cd1919] w-40 h-10 text-white py-2 px-4 rounded-lg flex justify-center">
					Volver
				</Link>
			</div></div>)}
		</>
	);
}
