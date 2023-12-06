'use client';

import React, { useState } from 'react';
import criteriosData from '@/pruebas/criterios.json';
import Tabla from '@/components/tablas/criteriosEvaluacion';

export default function EvaluacionFisicaAdmin() {
	const [nombreCriterio, setNombreCriterio] = useState('');
	const [criterioEliminar, setCriterioEliminar] = useState('');
	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNombreCriterio(e.target.value);
	};

	const handleEliminarChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCriterioEliminar(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!nombreCriterio.trim()) {
			alert('Por favor ingrese un rol para poder continuar');
			return;
		}

		// Enviar rol al endpoint correspondiente
		console.log('Rol enviado:', nombreCriterio);
		setNombreCriterio('');
	};

	const handleEliminarSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!criterioEliminar) {
			alert('Por favor seleccione una opción para poder continuar');
			return;
		}

		setShowConfirmation(true);
	};

	const handleConfirmEliminar = () => {
		console.log('Criterio a eliminar:', criterioEliminar);

		// Enviar criterioEliminar al endpoint correspondiente
		setShowConfirmation(false);
	};

	const handleCancelEliminar = () => {
		setShowConfirmation(false);
	};

	return (
		<>
			<div className="container mx-auto mt-8">
				<h1 className="text-center text-[400%]" id="titulos-grandes">
					EVALUACIÓN FÍSICA
				</h1>
				<div className="p-4 max-w-5xl mx-auto flex">
					<div className="w-2/3">
						<Tabla />
					</div>
					<div className="w-2/3 flex flex-col items-center pl-4">
						<form onSubmit={handleSubmit}>
							<div className="flex items-center">
								<div className="w-full">
									<h3 className="text-center text-[200%]" id="titulos-grandes">
										NOMBRE DEL CRITERIO
									</h3>
									<input
										type="text"
										name="nombre"
										value={nombreCriterio}
										onChange={handleInputChange}
										className="bg-neutral-200 rounded-full w-80 h-10 my-2 pl-4 text-black"
										id="texto-general"
										placeholder="Ingrese el nombre del criterio"
									/>
								</div>
							</div>
							<div className="mt-3 flex justify-center">
								<button
									type="submit"
									className="bg-[#cd1919] w-80 h-10 text-white py-2 px-4 rounded-lg"
									id="titulos-pequenos"
								>
									Crear criterio de evaluación
								</button>
							</div>
						</form>
						<form onSubmit={handleEliminarSubmit}>
							<div className="flex items-center mt-5">
								<div className="w-full">
									<h3 className="text-center text-[200%]" id="titulos-grandes">
										NOMBRE DEL CRITERIO
									</h3>
									<select
										name="nombreCriterioEliminar"
										value={criterioEliminar}
										onChange={handleEliminarChange}
										className="bg-neutral-200 rounded-full w-80 h-10 my-2 pl-4 text-black"
										id="texto-general"
									>
										<option value="" disabled>
											Seleccione el criterio a eliminar
										</option>
										{criteriosData.map((criterio, index) => (
											<option key={index} value={criterio.Nombre}>
												{criterio.Nombre}
											</option>
										))}
									</select>
								</div>
							</div>
							<div className="mt-3 flex justify-center">
								<button
									type="submit"
									className="bg-[#cd1919] w-80 h-10 text-white py-2 px-4 rounded-lg"
									id="titulos-pequenos"
								>
									Eliminar criterio de evaluación
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			{showConfirmation && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div className="bg-[#141414] p-10 rounded-lg">
						<h3 className="text-white text-center mb-4 text-[175%]" id='titulos-grandes'>
							¿ESTÁ SEGURO DE QUERER ELIMINAR ESTE CRITERIO?
						</h3>
						<div className="flex justify-center">
							<button
								onClick={handleConfirmEliminar}
								className="bg-[#cd1919] w-full h-10 text-white py-2 px-4 mx-2 rounded-lg"
								id="titulos-pequenos"
							>
								ELIMINAR
							</button>
							<button
								onClick={handleCancelEliminar}
								className="bg-[#cd1919] w-full h-10 text-white py-2 px-4 mx-2 rounded-lg"
								id="titulos-pequenos"
							>
								CANCELAR
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

