import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LoaderContenido } from '@/components/loaderContenido';
import styles from '@/public/css/styles.module.scss';

interface User {
  _id: string;
  name: string;
  lastName: string;
  // ... otras propiedades
}

interface UserDeportista {
  _id: string;
  name: string;
  lastName: string;
  cedula: string;
  email: string;
  weight: number;
  // ... otras propiedades
}

interface Category {
  _id: string;
  name: string;
  maxWeight: number;
  minWeight: number;
}

interface Combat {
  boxer1: string;
  boxer2: string;
}

export default function CrearTorneo() {
	const [entrenadores, setEntrenadores] = useState<User[]>([]);
	const [usuarios, setUsuarios] = useState<UserDeportista[]>([]);
	const [categorias, setCategorias] = useState<Category[]>([]);
	const [correos, setCorreos] = useState('');
	const [selectedEntrenador, setSelectedEntrenador] = useState('');
	const [fechaEvento, setFechaEvento] = useState('');
	const [horaInicio, setHoraInicio] = useState('');
	const [horaFin, setHoraFin] = useState('');
	const [nombreEvento, setNombreEvento] = useState('');
	const [descripcionEvento, setDescripcionEvento] = useState('');
	const [fechainvalida, setFechainvalida] = useState(false);
	const [horaInvalida, setHoraInvalida] = useState(false);
	const [nuevoParticipante1, setNuevoParticipante1] = useState('');
	const [nuevoParticipante2, setNuevoParticipante2] = useState('');
	const [selectedUsuarios, setSelectedUsuarios] = useState<string[]>([]);
	const [selectedCategoria, setSelectedCategoria] = useState<string>('');
	const [filteredUsuarios, setFilteredUsuarios] = useState<UserDeportista[]>([]);
	const [combates, setCombates] = useState<Combat[]>([]);
	const [fechaRepetida, setFechaRepetida] = useState(false);
	const [misDatos, setMisDatos] = useState <User>();

	const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
	const router = useRouter();

	const getEntrenadores = async (token: string) => {
		try {
			const headers = {
				sessiontoken: token,
			};

			const parametros = {
				role: 'Entrenador',
			};

			const response = await axios.get(`${apiEndpoint}/users/List`, {
				headers: headers,
				params: parametros,
			});
			return response.data.users;
		} catch (error) {
			console.log(error);
		}
	};

	const getUsuarios = async (token: string) => {
		try {
			const headers = {
				sessiontoken: token,
			};

			const parametros = {
				role: 'Deportista',
			};

			const response = await axios.get(`${apiEndpoint}/users/List`, {
				headers: headers,
				params: parametros,
			});
			return response.data.users;
		} catch (error) {
			console.log(error);
		}
	};

	const cargarEntrenadores = async () => {
		const datos = localStorage.getItem('userData');
		let token;
		if (datos != null) {
			token = JSON.parse(datos).token;
		}
		const result = await getEntrenadores(token);
		setEntrenadores(result);
	};

	const cargarUsuarios = async () => {
		const datos = localStorage.getItem('userData');
		let token;
		if (datos != null) {
			token = JSON.parse(datos).token;
		}
		const result = await getUsuarios(token);
		setUsuarios(result);
	};

	const cargarCategorias = async () => {
		const datos = localStorage.getItem('userData');
		let token;
		if (datos != null) {
			token = JSON.parse(datos).token;
		}
		try {
			const headers = {
				sessiontoken: token,
			};

			const response = await axios.get(`${apiEndpoint}/weightCategory/List`, {
				headers: headers,
			});
			setCategorias(response.data.weightCategory);
		} catch (error) {
			console.log(error);
		}
	};

	const esAdmin = () => {
		const datos = localStorage.getItem('userData');
		let rol;
		if (datos != null) {
			rol = JSON.parse(datos).role;
		}
		if(rol === 'Admin'){
			return true;
		}
		else{
			return false;
		}
	};

	const cargarMisDatos = () => {
		const datos = localStorage.getItem('datosUsuario');
		let nombre;
		if (datos != null) {
			nombre = JSON.parse(datos).nombre + ' ' + JSON.parse(datos).apellido;
		}
		const datos2 = localStorage.getItem('userData');
		let id;
		if (datos2 != null) {
			id = JSON.parse(datos2).userId;
		  }

		if(nombre !== undefined && id !== undefined){
			const newUser: User = {
				_id: id,
				name: nombre,
				lastName: ''
			};
			setMisDatos(newUser);
		}

	};

	useEffect(() => {
		cargarEntrenadores();
		cargarUsuarios();
		cargarCategorias();
		cargarMisDatos();
	}, []);

	useEffect(()=>{
		//console.log(selectedEntrenador);
		//console.log(fechaEvento);
		//console.log(combates);
	}, [combates]);

	useEffect(() => {
		if (selectedCategoria) {
			const categoriaSeleccionada = categorias.find((categoria) => categoria._id === selectedCategoria);
			if (categoriaSeleccionada) {
				const { minWeight, maxWeight } = categoriaSeleccionada;
				setFilteredUsuarios(usuarios.filter((usuario) => usuario.weight >= minWeight && usuario.weight <= maxWeight));
			}
		}
	}, [selectedCategoria, categorias, usuarios]);

	useEffect(() => {
		let nuevosCorreos = '';
		for (const user of selectedUsuarios) {
			nuevosCorreos += user + '\n';
		}
		setCorreos(nuevosCorreos);
	}, [selectedUsuarios]);

	useEffect(() => {
		if (typeof horaInicio === typeof horaFin) {
			if (horaInicio.length > 1) {
				const horaI = horaInicio.split(':');
				const horaF = horaFin.split(':');
				if (parseInt(horaI[0]) > parseInt(horaF[0])) {
					setHoraInvalida(true);
				} else {
					if (parseInt(horaI[0]) === parseInt(horaF[0])) {
						if (parseInt(horaI[1]) < parseInt(horaF[1])) {
							setHoraInvalida(false);
						} else {
							setHoraInvalida(true);
						}
					} else {
						setHoraInvalida(false);
					}
				}
			}
		} else {
			setHoraInvalida(true);
		}
	}, [horaFin, horaInicio]);

	const handlerSetParticipantes = (eliminar: boolean) => {
		let users = [...selectedUsuarios];
		const indice = users.indexOf(nuevoParticipante1);
		if (eliminar) {
			if (indice !== -1) {
				users.splice(indice, 1);
			}
		} else {
			if (indice === -1) {
				users.push(nuevoParticipante1);
			}
		}
		setSelectedUsuarios(users);

		// Guardar el combate en el estado de combates
		const nuevoCombate: Combat = { boxer1: nuevoParticipante1, boxer2: nuevoParticipante2 };
		setCombates([...combates, nuevoCombate]);

		// Imprimir el arreglo de combates en la consola
	};

	const handlerCancelar = () => {
		const datos = localStorage.getItem('userData');
		let rol;
		let route;
		if (datos !== null) {
			rol = JSON.parse(datos).role;
		}
		if (rol === 'Entrenador') route = 'entrenador';
		else route = 'administrador';
		router.push('/' + route + '/calendario');
	};

	const handlerSubmit = async () => {
		let token;
		const datos = localStorage.getItem('userData');
		if (datos !== null) {
			token = JSON.parse(datos).token;
		}
		const headers = {
			sessiontoken: token,
		};

		let body;

		if(esAdmin()){
			body = {
				name: nombreEvento,
				description: descripcionEvento,
				trainer: selectedEntrenador,
				date: fechaEvento,
				startsAt: horaInicio,
				endsAt: horaFin,
				combats: combates
			};
		}
		else{
			body = {
				name: nombreEvento,
				description: descripcionEvento,
				trainer: misDatos?._id,
				date: fechaEvento,
				startsAt: horaInicio,
				endsAt: horaFin,
				combats: combates
			};
		}
		let rol;
		let route;
		if (datos !== null) {
			rol = JSON.parse(datos).role;
		}
		if (rol === 'Entrenador') route = 'entrenador';
		else route = 'administrador';
		try {
			await axios.post(`${apiEndpoint}/event/battle`, body, { headers: headers });
			//console.log(response);
			router.push('/' + route + '/calendario');
		} catch (error) {
			setFechaRepetida(true);
			console.log(error);
		}
	};

	const ready = () => {
		return usuarios.length != 0 && entrenadores.length != 0 && categorias.length != 0;
	};

	const entrenadorSeleccionadoValido = () => {
		return selectedEntrenador !== '' && selectedEntrenador !== '-';
	};
	const fechaEventoVacio = () => {
		return fechaEvento === '';
	};
	const horaInicioVacia = () =>{
		return horaInicio === '';
	};
	const horaFinVacia = () => {
		return horaFin === '';
	};
	const nombreEventoVacio = () => {
		return nombreEvento === '';
	};
	const descripcionEventoVacio = () => {
		return descripcionEvento === '';
	};
	const categoriaVacia = () => {
		return selectedCategoria === '-' || selectedCategoria === '';
	};
	const nuevoParticipante1Vacio = () => {
		return nuevoParticipante1 === '' || nuevoParticipante1 === '-';
	};
	const nuevoParticipante2Vacio = () => {
		return nuevoParticipante2 === '' || nuevoParticipante2 === '-';
	};
	const combatesVacios = () => {
		return combates.length === 0;
	};

	const botonValido = () => {
		if(esAdmin()){
			return entrenadorSeleccionadoValido() && !fechaEventoVacio() && !fechainvalida && !horaInicioVacia() && !horaFinVacia() && !nombreEventoVacio() && !descripcionEventoVacio() && !combatesVacios();
		}
		else{
			return !fechaEventoVacio() && !fechainvalida && !horaInicioVacia() && !horaFinVacia() && !nombreEventoVacio() && !descripcionEventoVacio() && !combatesVacios();
		}
	};

	return (
		<>
			{!ready() && (<LoaderContenido/>)}
			{ready() && (
				<div className="container mx-auto mt-8">
					<div className="p-4 ">
						<form onSubmit={handlerSubmit}>
							<div className="flex">
								<div className="w-2/3 pr-4">
									<h1 className="text-center text-[400%]" id="titulos-grandes">
								Nuevo torneo
									</h1>
									<div className="flex">
										<div className="w-1/3 mx-2">
											<div className="w-full h-10 mx-5 my-2 flex items-center justify-center text-white" id="texto-general">
										Entrenador encargado
											</div>
										</div>
										{esAdmin() && (
											<select
												onChange={(event) => {
													setSelectedEntrenador(event.target.value);
												}}
												required
												className="bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black"
												id="texto-general"
												placeholder="Entrenador encargado"
												value={selectedEntrenador}
											>
												<option value="-">Selecciona un entrenador</option>
												{entrenadores.map((entrenador) => (
													<option key={entrenador._id} value={entrenador._id}>
														{entrenador.name} {entrenador.lastName}
													</option>
												))}
											</select>
										)}
										{!esAdmin() && (
											<label className="bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 p-2 pl-3 text-black" id="texto-general">{misDatos?.name}</label>
										)}
									</div>
									<div className="flex">
										<div className="w-1/3 mx-2">
											<div className="w-full h-10 mx-5 my-2 flex items-center justify-center text-white" id="texto-general">
										Fecha del evento
											</div>
										</div>
										<input
											required
											type="date"
											onChange={(event) => {
												setFechaEvento(event.target.value);
												if (new Date(event.target.value) < new Date()) setFechainvalida(true);
												else setFechainvalida(false);
											}}
											className={(fechaEventoVacio() ? ' border-[3px] border-red-700 ' : '') + 'bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'}
											id="texto-general"
										/>
									</div>
									{fechainvalida && (
										<div className="flex justify-center">
											<p className="text-red-500 mb-2">La fecha no puede ser en un día anterior a la fecha de hoy</p>
										</div>
									)}

									<div className="flex items-center justify-center">
										<div className="flex">
											<div className="w-1/3 mx-4">
												<div className="w-full h-10 mx-5 my-2 flex items-center justify-center text-white" id="texto-general">
											Hora inicio
												</div>
											</div>
											<input
												required
												type="time"
												onChange={(event) => {
													setHoraInicio(event.target.value);
												}}
												className={(horaInicioVacia() ? ' border-[3px] border-red-700 ' : '') + 'bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'}
												id="texto-general"
												placeholder="Hora inicio"
											/>
										</div>
										<div className="flex">
											<div className="w-1/3 mx-2">
												<div className="w-full h-10 mx-5 my-2 flex items-center justify-center text-white" id="texto-general">
											Hora fin
												</div>
											</div>
											<input
												required
												type="time"
												onChange={(event) => {
													setHoraFin(event.target.value);
												}}
												className={(horaFinVacia() ? ' border-[3px] border-red-700 ' : '') + 'bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'}
												id="texto-general"
												placeholder="Hora fin"
											/>
										</div>
									</div>
									{horaInvalida && (
										<div className="flex justify-center">
											<p className="text-red-500 mb-2">La hora de fin no puede corresponder a una hora anterior a la hora de inicio</p>
										</div>
									)}
									<div className="flex">
										<input
											required
											placeholder="Nombre del evento"
											onChange={(event) => {
												setNombreEvento(event.target.value);
											}}
											type="text"
											className={(nombreEventoVacio() ? ' border-[3px] border-red-700 ' : '') + 'bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black'}
											id="texto-general"
										/>
									</div>
									<div className="flex items-center justify-center">
										<textarea
											required
											onChange={(event) => {
												setDescripcionEvento(event.target.value);
											}}
											rows={3}
											className={(descripcionEventoVacio() ? ' border-[3px] border-red-700 ' : '') + 'bg-neutral-200 rounded-lg w-full mx-5 my-2 p-2 text-black'}
											id="texto-general"
											placeholder="Descripcion general del evento"
										/>
									</div>
									{fechaRepetida && (
										<p className='text-center p-4 text-[125%] text-red-600'>Ya hay un evento programado para esa fecha</p>
									)}
								</div>
								<div className="w-1/2 pr-4">
									<div className="flex">
										<div className="w-1/3 mx-2">
											<div className="w-full h-10 mx-5 my-2 flex items-center justify-center text-white" id="texto-general">
										Categoría
											</div>
										</div>
										<select
											onChange={(event) => {
												setSelectedCategoria(event.target.value);
											}}
											required
											className="bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black"
											id="texto-general"
											placeholder="Categoría"
											value={selectedCategoria}
										>
											<option value="-">Selecciona una categoría</option>
											{categorias.map((categoria) => (
												<option key={categoria._id} value={categoria._id}>
													{categoria.name}
												</option>
											))}
										</select>
									</div>
									<div className="flex">
										<select
											onChange={(event) => {
												setNuevoParticipante1(event.target.value);
											}}
											required
											disabled = {categoriaVacia()}
											className="bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black"
											id="texto-general"
											value={nuevoParticipante1}
										>
											<option value="-">Selecciona un participante</option>
											{filteredUsuarios.map((usuario) => (
												<option key={usuario._id} value={usuario._id} disabled={usuario._id === nuevoParticipante2}>
													{usuario.name} {usuario.lastName}
												</option>
											))}
										</select>
									</div>
									<div className="flex justify-center">
										<h1 className="text-center text-[250%]" id="titulos-grandes">
									VS
										</h1>
									</div>
									<div className="flex">
										<select
											onChange={(event) => {
												setNuevoParticipante2(event.target.value);
											}}
											required
											disabled = {categoriaVacia()}
											className="bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black"
											id="texto-general"
											value={nuevoParticipante2}
										>
											<option value="-">Selecciona otro participante</option>
											{filteredUsuarios.map((usuario) => (
												<option key={usuario._id} value={usuario._id} disabled={usuario._id === nuevoParticipante1}>
													{usuario.name} {usuario.lastName}
												</option>
											))}
										</select>
									</div>
									<div className="flex">
										<textarea
											required
											value={combates.map((combat) => `${usuarios.find((user) => user._id === combat.boxer1)?.name} vs ${usuarios.find((user) => user._id === combat.boxer2)?.name}`).join('\n')}
											readOnly
											className={(combatesVacios() ? 'border-[3px] border-red-700 ' : '') + 'bg-neutral-200 rounded-lg w-full h-40 mx-5 my-5 p-2 text-black'}
											id="texto-general"
											placeholder="Combates"
										/>
									</div>
									<div className="flex justify-center items-center mt-4">
										<button type="button" disabled={nuevoParticipante1Vacio() || nuevoParticipante2Vacio()} onClick={() => handlerSetParticipantes(false)} className={(nuevoParticipante1Vacio() || nuevoParticipante2Vacio() ? styles.buttonDisabled + ' cursor-not-allowed' : styles.button) + ' text-white rounded p-2'}>
									Agregar Combate
										</button>
									</div>
								</div>
							</div>
							<div className="flex justify-center items-center mt-4">
								<button onClick={() => handlerSubmit()} type="button" className={(!botonValido() ? styles.buttonDisabled + ' cursor-not-allowed' : styles.button) + ' text-white rounded p-2 mx-5'}>
							Agregar Torneo
								</button>
								<button type="button" onClick={handlerCancelar} className={styles.button + ' text-white rounded p-2 w-[130px]'}>
							Cancelar
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);

}
