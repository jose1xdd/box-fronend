'use client';

import React, { useState } from 'react';
import Tabla from '@/components/tablas/categorias';

type InputName = 'min' | 'max';

export default function AdministrarCategorias() {
	const [categoria, setCategoria] = useState('');
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(0);

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

	return (
		<>
			<div className='w-[80%] mx-auto mt-[6%]'>
				<h1 className='text-[300%]' id='textos-grandes'>
                    CATEGORÍAS
				</h1>
			</div>
			<Tabla />
			<div className='w-[80%] mx-auto mt-5'>
				<form className='flex col'>
					<div className='w-2/4'>
						<div className='flex items-center justify-center'>
							<label className='block mb-2 tex-center text-[150%]' id='titulos-grandes'>NOMBRE DE LA CATEGORÍA</label>
						</div>
						<input
							type='text'
							value={categoria}
							onChange={(e) => setCategoria(e.target.value)}
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
				</form>
			</div>
			<div className='flex items-center justify-center mt-5'>
				<button
					type="button"
					className='bg-[#cd1919] mx-5 w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'
				>
                    Agregar categoría de peso
				</button>
			</div>
		</>
	);
}
