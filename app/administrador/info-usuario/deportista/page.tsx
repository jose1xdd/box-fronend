'use client';

import { ChangeEvent, useState } from 'react';

interface FormData {
  nombre: string;
  apellido: string;
  documento: string;
  direccion: string;
  telefono: string;
  correo: string;
  club: string;
  categoria: string;
}

export default function InfoDeportista() {

	const [esEditable, setEsEditable] = useState(false);
	const [datosDeportista, setDatosDeportista] = useState({
		nombre: '',
		apellido: '',
		documento: '',
		direccion: '',
		telefono: '',
		correo: '',
		club: '',
		categoria: '',
	});

	const handleChange = (field: keyof FormData, value: string) => {
		setDatosDeportista((prevFormData) => ({
			...prevFormData,
			[field]: value
		}));
	};

	const handleToggleEdit = async () => {
		if (esEditable) {
			//await handleSaveChanges();
		}
		setEsEditable((prevEsEditable) => !prevEsEditable);
	};

	return (
		<>
			<div className="container mx-auto mt-8">
				<h1 className='text-center text-[400%]' id='titulos-grandes'>INFORMACIÓN DEPORTISTA</h1>
				<div className='flex items-center justify-center'>
					<svg
						className="my-1"
						xmlns="http://www.w3.org/2000/svg"
						height="6em"
						viewBox="0 0 512 512"
						fill="#ffffff"
					>
						<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
					</svg>
				</div>
				<form>
					<div className="p-4 max-w-5xl mx-auto flex">
						<div className="w-2/4 pr-4">
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                        Nombre:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									{esEditable ?
										(
											<input
												type="text"
												name="nombre"
												className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
												value={datosDeportista.nombre}
												onChange={(e) => handleChange('nombre', e.target.value)}
											/>
										) : (
											<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
												{datosDeportista.nombre}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                        Apellido:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									{esEditable ?
										(
											<input
												type="text"
												name="apellido"
												className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
												value={datosDeportista.apellido}
												onChange={(e) => handleChange('apellido', e.target.value)}
											/>
										) : (
											<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
												{datosDeportista.apellido}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                        Documento:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									{esEditable ?
										(
											<input
												type="text"
												name="documento"
												className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
												value={datosDeportista.documento}
												onChange={(e) => handleChange('documento', e.target.value)}
											/>
										) : (
											<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
												{datosDeportista.documento}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                        Dirección
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									{esEditable ?
										(
											<input
												type="text"
												name="direccion"
												className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
												value={datosDeportista.direccion}
												onChange={(e) => handleChange('direccion', e.target.value)}
											/>
										) : (
											<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
												{datosDeportista.direccion}
											</div>
										)
									}
								</div>
							</div>
						</div>
						<div className="w-2/4 pr-4">
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                        Teléfono
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									{esEditable ?
										(
											<input
												type="text"
												name="telefono"
												className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
												value={datosDeportista.telefono}
												onChange={(e) => handleChange('telefono', e.target.value)}
											/>
										) : (
											<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
												{datosDeportista.telefono}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                        Correo
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									{esEditable ?
										(
											<input
												type="text"
												name="correo"
												className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
												value={datosDeportista.correo}
												onChange={(e) => handleChange('correo', e.target.value)}
											/>
										) : (
											<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
												{datosDeportista.correo}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                    Club:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									{esEditable ?
										(
											<select
												name="club"
												value={datosDeportista.club}
												onChange={(e) => handleChange('club', e.target.value)}
												className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'
											>
												<option value="">Seleccione un club</option>
												<option value="norte">Norte</option>
												<option value="sur">Sur</option>
												<option value="este">Este</option>
												<option value="oeste">Oeste</option>
											</select>
										) : (
											<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
												{datosDeportista.club}
											</div>
										)
									}
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
                                    Categoria:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									{esEditable ?
										(
											<select
												name="categoria"
												value={datosDeportista.categoria}
												onChange={(e) => handleChange('categoria', e.target.value)}
												className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 px-4 text-black'
											>
												<option value="">Seleccione una categoria</option>
												<option value="pluma">Pluma</option>
												<option value="pesado">Pesado</option>
												<option value="mosca">Mosca</option>
											</select>
										) : (
											<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
												{datosDeportista.categoria}
											</div>
										)
									}
								</div>
							</div>
						</div>
					</div>
					<div className="mt-5 flex justify-center">
						<button
							type="button"
							onClick={handleToggleEdit}
							className='bg-[#cd1919] mx-5 w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'
						>
							{esEditable ? 'Guardar cambios' : 'Editar información'}
						</button>
						<button
							type="button"
							className='bg-[#cd1919] mx-5 w-60 h-10 text-white py-2 px-4 rounded-lg' id='titulos-pequenos'
						>
                            Cargar nueva foto de perfil
						</button>
					</div>
				</form>
			</div>
		</>
	);
};