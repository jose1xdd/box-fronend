'use client';
import { useState, useEffect } from 'react';

import {
	Barlow_Semi_Condensed,
	Bebas_Neue,
	Exo_2
} from 'next/font/google';

const barlow = Barlow_Semi_Condensed({
	weight: ['500'],
	subsets: ['latin']
});

const bebas = Bebas_Neue({
	weight: ['400'],
	subsets: ['latin']
});

const exo = Exo_2({
	weight: ['100'],
	subsets: ['latin']
});

interface FormData {
	destinatarios: string[];
	asunto: string;
	cuerpo: string;
  }

export default function PerfilAdministrador() {
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
				<h1 className={`${bebas.className} text-center text-[400%]`}>COMUNICADOS</h1>
				<form>
					<div className="p-4 max-w-5xl mx-auto flex">
						<div className="w-2/3 pr-4">
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
										Buscar usuario:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									<input
										type="text"
										className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black`}
										value={datosCorreo.destinatarios.join(', ')}

									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
										Asunto del correo:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									<input
										type="text"
										className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black`}
										value={datosCorreo.asunto}
										onChange={(e) => handleChange('asunto', e.target.value)}

									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
										Cuerpo del correo:
									</div>
								</div>
								<div className="w-2/3 mx-2">
									<input
										type="text"
										className={`${barlow.className} bg-neutral-200 rounded-lg w-full h-40 mx-5 my-2 pl-4 text-black`}
										value={datosCorreo.cuerpo}
										onChange={(e) => handleChange('cuerpo', e.target.value)}

									/>
								</div>
							</div>
						</div>
						<div className="w-1/3 flex flex-col items-center ml-4">
							<div className={`${barlow.className} bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black`}>
							    Destinatarios
							</div>
							<input
								readOnly
								type="text"
								className={`${barlow.className} bg-neutral-200 rounded-lg w-full h-40 mx-5 my-2 pl-4 text-black`}
								value=''
							/>
							<div className="mt-2 flex justify-end">
								<button
									type="button"
									className={`${exo.className} bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg`}
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