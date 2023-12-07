// pages.tsx
'use client';
import React, { useState } from 'react';
import Table from '@/components/tablas/Table';
import ModalArchivo from '@/components/ModalArchivo/ModalArchivo';
import data from '@/pruebas/usuarios.json';
import Link from 'next/link';
import axios from 'axios';
import * as xlsx from 'xlsx';

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

	const handleDownload = async () => {
		const datos = localStorage.getItem('userData');
		let json;

		if (datos !== null) {
			json = JSON.parse(datos);
			console.log(json);
		}

		const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

		try {
			const headers = {
				sessiontoken: json.token
			};

			const response = await axios.get(`${apiEndpoint}/users/download/Deportistas`, {
				headers: headers,
				responseType: 'blob'
			});// Accede a la propiedad 'data' de la respuesta

			if (response.status === 200) {
				// Convertir la respuesta a un blob (archivo)
				const blob = response.data;

				// Crear un objeto URL para el blob
				const url = window.URL.createObjectURL(new Blob([blob]));

				// Crear un enlace temporal y simular el clic para descargar el archivo
				const link = document.createElement('a');
				link.href = url;
				link.setAttribute('download', 'Reporte_deportistas.xlsx'); // Nombre del archivo
				document.body.appendChild(link);
				link.click();

				// Liberar el objeto URL creado
				setTimeout(() => {
					window.URL.revokeObjectURL(url);
					document.body.removeChild(link);
				  }, 1000);
			}

		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-full max-w-screen-xl mx-auto mt-[6%] p-6">
			<Table rol='Deportista' linkVer='/administrador/info-usuario/deportista' linkEditar='/administrador/editar-usuario/deportista'/>
			<div className="flex justify-between items-center mt-4">
				<button
					onClick={handleDownload}
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