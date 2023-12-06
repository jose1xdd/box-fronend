// pages.tsx
'use client';
import React, { useState } from 'react';
import Table from '@/components/tablas/Table';
import ModalArchivo from '@/components/ModalArchivo/ModalArchivo';
import data from '@/pruebas/usuarios.json';
import Link from 'next/link';

const Home: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files && files.length > 0) {
			// Aquí puedes manejar la lógica relacionada con el archivo si es necesario
			// Por ejemplo, puedes mostrar la información del archivo antes de abrir el modal
			handleOpenModal();
		}
	};

	return (
		<div className="w-full max-w-screen-xl mx-auto mt-[6%] p-6">
			<Table rol='Deportista' link='/administrador/info-usuario/deportista'/>
			<div className="flex justify-between items-center mt-4">
				<button
					onClick={() => alert('Usuarios descargados')}
					className="bg-[#cd1919] text-white rounded p-2"
				>
					Descargar usuarios
				</button>
				<div className="flex gap-2">
					<label htmlFor="fileInput" className="bg-[#cd1919] text-white rounded p-2 cursor-pointer">
						Carga masiva
					</label>
					<input
						type="file"
						id="fileInput"
						style={{ display: 'none' }}
						onChange={handleFileInputChange}
					/>
					<Link href='/administrador/crear-usuario/deportista'>
						<button
							className="bg-[#cd1919] text-white rounded p-2"
						>
						+
						</button>
					</Link>

				</div>
			</div>
			{/* <ModalArchivo isOpen={isModalOpen} onClose={handleCloseModal} /> */}
		</div>
	);
};

export default Home;