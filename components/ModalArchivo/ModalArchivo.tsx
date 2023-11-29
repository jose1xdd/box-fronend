// components/ModalArchivo.tsx
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './ModalArchivo.css'; // Importar el archivo de estilos CSS

interface ModalArchivoProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalArchivo: React.FC<ModalArchivoProps> = ({ isOpen, onClose }) => {
	const [isDragging, setIsDragging] = useState(false);
	const [draggedFiles, setDraggedFiles] = useState<File[]>([]);

	const handleDragEnter = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const handleDragLeave = () => {
		setIsDragging(false);
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(false);

		const files = Array.from(e.dataTransfer.files);
		setDraggedFiles(files);
	};

	const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files) {
			setDraggedFiles(Array.from(files));
		}
	};

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel="Modal"
			className={isDragging ? 'dragging react-modal' : 'react-modal'}
		>
			<div
				onDragEnter={handleDragEnter}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
				className="drop-zone"
			>
				<h2>Cargar Archivo</h2>
				<input type="file" onChange={handleFileInputChange} />
				<button onClick={onClose}>Cerrar</button>

				{draggedFiles.length > 0 && (
					<div>
						<h3>Archivos Arrastrados:</h3>
						<ul>
							{draggedFiles.map((file, index) => (
								<li key={index}>{file.name}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</ReactModal>
	);
};

export default ModalArchivo;
