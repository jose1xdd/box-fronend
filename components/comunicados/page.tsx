'use client';
import { useState, useEffect } from 'react';

interface FormData {
	destinatarios: string[];
	asunto: string;
	cuerpo: string;
}

export default function Comunicados() {
	const formularioCorreo: FormData = {
		destinatarios: ['Texto'],
		asunto: 'Texto',
		cuerpo: 'Texto'
	};

	const [datosCorreo, setDatosCorreo] = useState<FormData>(formularioCorreo);

	const handleChange = (field: keyof FormData, value: string | string[]) => {
		setDatosCorreo((prevFormData) => ({
			...prevFormData,
			[field]: value
		}));
	};

	return (
		<>
			<div className="container mx-auto mt-8">
				<h1 className='text-center text-[400%]' id='textos-grandes'>COMUNICADOS</h1>
				<form>
					<div className="p-4 max-w-5xl mx-auto flex">
						<div className="w-2/3 pr-4">
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										Buscar usuario:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									<input
										type="text"
										className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black' id='texto-general'
										value={datosCorreo.destinatarios.join(', ')}
										onChange={(e) => handleChange('destinatarios', e.target.value.split(', '))}
									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										Asunto del correo:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									<input
										type="text"
										className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black' id='texto-general'
										value={datosCorreo.asunto}
										onChange={(e) => handleChange('asunto', e.target.value)}

									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										Cuerpo del correo:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									<input
										type="text"
										className='bg-neutral-200 rounded-lg w-full h-40 mx-5 my-2 pl-4 text-black' id='texto-general'
										value={datosCorreo.cuerpo}
										onChange={(e) => handleChange('cuerpo', e.target.value)}

									/>
								</div>
							</div>
						</div>
						<div className="w-1/3 flex flex-col items-center ml-4">
							<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
								Destinatarios
							</div>
							<input
								readOnly
								type="text"
								className='bg-neutral-200 rounded-lg w-full h-40 mx-5 my-2 pl-4 text-black' id='texto-general'
								value=''
							/>
							<div className="mt-2 flex justify-end">
								<button
									type="button"
									className='bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'
								>
									Enviar correo electrónico
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}