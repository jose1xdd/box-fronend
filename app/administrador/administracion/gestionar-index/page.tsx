'use client';

import { useEffect, useState } from 'react';
import styles from '@/public/css/styles.module.scss';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ActualizarLogo } from '@/app/lib/basic_request';
import { LoaderContenido } from '@/components/loaderContenido';

interface FormData {
    mision: string;
    vision: string;
}

export default function GestionarIndex() {
	const [datosIndex, setDatosIndex] = useState({
		mision: '',
		vision: '',
	});
	const router = useRouter();
	const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;// Inicializa el router

	const getMisionYVision = async () => {
		try {
			const response = await axios.get(`${apiEndpoint}/indexPag`);
			setDatosIndex({
				mision: response.data.infoIndex.mision,
				vision: response.data.infoIndex.vision,
			});
		} catch (error) {
		}
	};

	const misionVacio = () => {
		return datosIndex.mision === '';
	};
	const visionVacio = () => {
		return datosIndex.vision === '';
	};

	const botonValido = () => {
		return !misionVacio() && !visionVacio();
	};

	useEffect(() => {
		getMisionYVision();
	}, []);

	const handleChange = (field: keyof FormData, value: string) => {
		setDatosIndex((prevFormData) => ({
			...prevFormData,
			[field]: value,
		}));
	};

	const ActualizarIndex = async () => {
		let token;
		const datos = localStorage.getItem('userData');
		if (datos !== null) {
			token = JSON.parse(datos).token;
		}
		const headers = {
			sessiontoken: token
		};
		const body = {
			vision: datosIndex.vision,
			mision: datosIndex.mision
		};
		try {
			await axios.patch(`${apiEndpoint}/indexPag/Info`, body, { headers: headers });
			router.push('/administrador/administracion');
		} catch (error) {
			console.log(error);
		}
	};

	const ready = () => {
		return datosIndex !== undefined;
	};

	return (
		<>
			{!ready() && (<LoaderContenido/>)}
			{ready() && (
				<>
					<h1 className="text-center text-[350%]" id="titulos-grandes">
					Información del index
					</h1>
					<form>
						<div className="max-w-5xl mx-auto flex col justify-center items-center">
							<div className="w-2/4 mx-4">
								<h3 className="text-[200%]" id="titulos-grandes">
								Misión
								</h3>
								<textarea
									name="mision"
									className={(misionVacio() ? 'border-[3px] border-red-700 ' : 'border-black border-[3px] ') + 'bg-white rounded-lg w-full p-2 text-black'}
									id='texto-general'
									rows={9}
									value={datosIndex.mision}
									onChange={(e) => handleChange('mision', e.target.value)}
								/>
							</div>
							<div className="w-2/4 mx-4">
								<h3 className="text-[200%]" id="titulos-grandes">
								Visión
								</h3>
								<textarea
									name="vision"
									className={(visionVacio() ? 'border-[3px] border-red-700 ' : 'border-black border-[3px] ') + 'bg-white rounded-lg w-full p-2 text-black'}
									rows={9}
									id='texto-general'
									value={datosIndex.vision}
									onChange={(e) => handleChange('vision', e.target.value)}
								/>
							</div>
						</div>
					</form>
					<div className="mt-6 flex justify-center items-center mx-auto space-x-4">
						<button
							type="button"
							disabled={!botonValido()}
							onClick={() => ActualizarIndex()}
							className={(botonValido() ? styles.button : styles.buttonDisabled + ' cursor-not-allowed') + ' text-white p-2'}
						>
							Guardar cambios
						</button>
						<button
							type="button"
							onClick={() => router.push('/administrador/administracion')}
							className={styles.button + ' text-white p-2'}
						>
							Volver
						</button>
					</div>

				</>
			)}
		</>
	);
}
