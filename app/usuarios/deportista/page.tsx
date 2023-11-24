// pages.tsx
'use client';
import React, { useState } from 'react';
import Table from '@/components/Table';
import ModalArchivo from '@/components/ModalArchivo/ModalArchivo';
import data from '@/pruebas/usuarios.json';

const Home: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="w-full max-w-screen-xl mx-auto p-6">
			<Table data={data} filtroRol="deportista" />
			<div className="flex justify-between items-center mt-4">
				<button
					onClick={() => alert('Usuarios descargados')}
					className="bg-[#cd1919] text-white rounded p-2"
				>
					Descargar usuarios
				</button>
				<div className="flex gap-2">
					<button onClick={handleOpenModal} className="bg-[#cd1919] text-white rounded p-2">
						Carga masiva
					</button>
					<button
						onClick={() => alert('Agregar usuario')}
						className="bg-[#cd1919] text-white rounded p-2"
					>
						+
					</button>
				</div>
			</div>
			<ModalArchivo isOpen={isModalOpen} onClose={handleCloseModal} />
		</div>
	);
};

export default Home;
