'use client';

import React, { useState } from 'react';
import usuariosData from '@/pruebas/usuarios.json';
import Tabla from '@/components/tablas/roles';
import Link from 'next/link';

export default function GestionarRolesAdmin() {
	const [rol, setRol] = useState('');
	const [rolEliminar, setRolEliminar] = useState('');
	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRol(e.target.value);
	};

	const handleEliminarChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setRolEliminar(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!rol.trim()) {
			alert('Por favor ingrese un rol para poder continuar');
			return;
		}

		// Enviar rol al endpoint correspondiente
		console.log('Rol enviado:', rol);
		setRol('');
	};

	const handleEliminarSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!rolEliminar) {
			alert('Por favor seleccione una opción para poder continuar');
			return;
		}

		setShowConfirmation(true);
	};

	const handleConfirmEliminar = () => {
		console.log('Rol a eliminar:', rolEliminar);

		// Enviar RolEliminar al endpoint correspondiente
		setShowConfirmation(false);
	};

	const handleCancelEliminar = () => {
		setShowConfirmation(false);
	};

	const rolesUnicos = Array.from(new Set(usuariosData.map((usuario) => usuario.rol)));

	return (
		<>
			<div className="container mx-auto mt-8">
				<h1 className="text-center text-[400%]" id="titulos-grandes">
                    ROLES
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
                                        ROL
									</h3>
									<input
										type="text"
										name="rol"
										value={rol}
										onChange={handleInputChange}
										className="bg-white border-2 border-black rounded-full w-80 h-10 my-2 pl-4 text-black"
										id="texto-general"
										placeholder="Ingrese el rol"
									/>
								</div>
							</div>
							<div className="mt-3 flex justify-center">
								<button
									type="submit"
									className="bg-[#cd1919] w-80 h-10 text-white py-2 px-4 rounded-lg"
									id="titulos-pequenos"
								>
                                    Crear rol
								</button>
							</div>
						</form>
						<form onSubmit={handleEliminarSubmit}>
							<div className="flex items-center mt-5">
								<div className="w-full">
									<h3 className="text-center text-[200%]" id="titulos-grandes">
                                        ROL
									</h3>
									<select
										name="rolEliminar"
										value={rolEliminar}
										onChange={handleEliminarChange}
										className="bg-white border-2 border-black rounded-full w-80 h-10 my-2 pl-4 text-black"
										id="texto-general"
									>
										<option value="" disabled>
                                            Seleccione el rol a eliminar
										</option>
										{rolesUnicos.map((rol, index) => (
											<option key={index} value={rol}>
												{rol}
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
                                    Eliminar rol
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			{showConfirmation && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div className="bg-[#141414] p-10 rounded-lg">
						<h3 className="text-white text-center mb-4 text-[175%]" id="titulos-grandes">
                            ¿Está seguro de querer eliminar este rol?
						</h3>
						<div className="flex justify-center">
							<button
								onClick={handleConfirmEliminar}
								className="bg-[#cd1919] w-full h-10 text-white py-2 px-4 mx-2 rounded-lg"
								id="titulos-pequenos"
							>
                                Eliminar
							</button>
							<button
								onClick={handleCancelEliminar}
								className="bg-[#cd1919] w-full h-10 text-white py-2 px-4 mx-2 rounded-lg"
								id="titulos-pequenos"
							>
                                Cancelar
							</button>
						</div>
					</div>
				</div>
			)}
			<div className="flex justify-center mt-8">
				<Link href="../administracion" className="bg-[#cd1919] w-40 h-10 text-white py-2 px-4 rounded-lg flex justify-center">
					Volver
				</Link>
			</div>
		</>
	);
}