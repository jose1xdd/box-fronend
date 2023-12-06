'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormData {
    mision: string;
    vision: string;
}

export default function GestionarIndex() {
	const [datosIndex, setDatosIndex] = useState({
		mision: '',
		vision: '',
	});

	const handleChange = (field: keyof FormData, value: string) => {
		setDatosIndex((prevFormData) => ({
			...prevFormData,
			[field]: value
		}));
	};

	return (
		<>
			<h1 className="text-center text-[400%]" id="titulos-grandes">
                INFORMACIÓN DEL INDEX
			</h1>
			<form>
				<div className="max-w-5xl mx-auto flex col justify-center items-center">
					<div className="w-2/4 mx-4">
						<h3 className="text-[200%]" id="titulos-grandes">
                            MISIÓN
						</h3>
						<textarea
							name="mision"
							className="bg-neutral-200 rounded-lg w-full h-40 my-2 pl-4 text-black"
							value={datosIndex.mision}
							onChange={(e) => handleChange('mision', e.target.value)}
						/>
					</div>
					<div className="w-2/4 mx-4">
						<h3 className="text-[200%]" id="titulos-grandes">
                            VISIÓN
						</h3>
						<textarea
							name="vision"
							className="bg-neutral-200 rounded-lg w-full h-40 my-2 pl-4 text-black"
							value={datosIndex.vision}
							onChange={(e) => handleChange('vision', e.target.value)}
						/>
					</div>
				</div>
			</form>
			<div className="max-w-5xl mx-auto mt-5 flex col justify-center items-center">
				<div className="w-2/4 mx-4">
					<h3 className="text-[200%]" id="titulos-grandes">
                        SECCIONES VISUALIZADAS
					</h3>
					<textarea
						name="mision"
						readOnly
						className="bg-neutral-200 rounded-lg w-full h-40 my-2 pl-4 text-black"
					/>
				</div>
				<div className="w-2/4 mx-4">
					<div className="flex justify-center items-center my-5">
						<button
							type="button"
							className="bg-[#cd1919] w-60 h-10 text-white rounded-lg"
							id="titulos-pequenos"
						>
                            Guardar cambios
						</button>
					</div>
					<div className="flex justify-center items-center my-5">
						<Link href="/administrador/administracion/gestionar-index/editar-secciones">
							<button
								type="button"
								className="bg-[#cd1919] w-60 h-10 text-white rounded-lg"
								id="titulos-pequenos"
							>
                                Editar secciones
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
