
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
	useRouter,
	useSearchParams,
	useSelectedLayoutSegment
} from 'next/navigation';
import { EventEmitterAsyncResource } from 'events';

interface user {
    _id: string,
    name: string,
    lastName: string,
    birthDate: string,
    cedula: string,
    email: string,
    phone: string,
    address: string,
}

interface combats {
    boxer1: user,
    boxer2: user,
    winner: String,
    status: String,
    _id: String,
}

interface event {
    _id: String,
    type: String,
    trainer: String,
    name: String,
    description: String,
    startsAt: String,
    endsAt: String,
    participants: user[],
    combats: combats[]
}
export default function VerEvento() {
	const [eventInfo, setEventInfo] = useState<event>({
		_id: '',
		type: '',
		trainer: '',
		name: '',
		description: '',
		startsAt: '',
		endsAt: '',
		participants: [],
		combats: [],
	  });
	const [fechaEvento, setFechaEvento] = useState<String>();
	const [entrenador, setEntrenador] = useState<user>({
		_id: '',
		name: '',
		lastName: '',
		birthDate: '',
		cedula: '',
		email: '',
		phone: '',
		address: '',
	  });
	const [horaI, sethoraI] = useState<String>();
	const [horaF, sethoraF] = useState<String>();
	const[correos, setCorreos] = useState('');
	const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
	const router = useRouter();
	const EventId = useSearchParams().get('EventId');

	const getEvent = async (token:string, eventId: string) => {
		try {
			const headers = {
				sessiontoken: token,
			};

			const parametros = {
				eventId: eventId,
			};

			const response = await axios.get(`${apiEndpoint}/event/Info`, {
				headers: headers,
				params: parametros
			});
			return response.data.evento;
		} catch (error) {
			console.log(error);
		}
	};

	const getEntrenador = async (token:string, entrenadorId: string) => {
		try {
			const headers = {
				sessiontoken: token,
			};

			const parametros = {
				userId: entrenadorId,
			};

			const response = await axios.get(`${apiEndpoint}/users`, {
				headers: headers,
				params: parametros
			});
			return response.data.user;
		} catch (error) {
			console.log(error);
		}
	};

	const cargarEvento = async () => {
		const datos = localStorage.getItem('userData');
		let token;
		if(datos != null){
			token = JSON.parse(datos).token;
		}
		setEventInfo(await getEvent(token, EventId as string));
	};

	const cargarEntrenador = async () => {
		const datos = localStorage.getItem('userData');
		let token;
		if(datos != null){
			token = JSON.parse(datos).token;
		}
		setEntrenador(await getEntrenador(token, eventInfo.trainer as string));
	};

	const cargarTiempos = () => {
		const fecha = eventInfo.startsAt.split('T')[0];
		setFechaEvento(fecha);
		const horaI = eventInfo.startsAt.split('T')[1].split(':');
		const hI = horaI[0] + ':' + horaI[1];
		const horaF = eventInfo.endsAt.split('T')[1].split(':');
		const hF = horaF[0] + ':' + horaF[1];
		sethoraI(hI);
		sethoraF(hF);
	};

	const cargarParticipantes = () => {
		let nuevosCorreos = '';
		for(const user of eventInfo.participants){
			nuevosCorreos += (user.email + '\n');
		}
		setCorreos(nuevosCorreos);
	};

	useEffect(()=>{
		cargarEvento();
	}, []);

	useEffect(()=>{
		if(eventInfo._id != ''){
			cargarTiempos();
			cargarEntrenador();
			if(eventInfo.type == 'Reunion'){
				cargarParticipantes();
			}
		}
	}, [eventInfo]);

	const handleClick = () => {
		const datos = localStorage.getItem('userData');
		let rol;
		if(datos != null){
			rol = JSON.parse(datos).role;
		}
		if(rol == 'Admin') rol = 'administrador';
		rol = (rol as string).toLowerCase();
		router.push('/' + rol + '/calendario');
	};

	return (
		<div className="container mx-auto mt-8">
			<div className="p-4 ">

				<div className='flex w-full'>
					<div className="w-2/3 pr-4">
						<h1 className='text-center text-[400%]' id='titulos-grandes'>Información del evento</h1>
						<div className="flex">
							<div className="w-1/3 mx-2">
								<div className=' w-full h-10 mx-5 my-2 flex items-center justify-center text-white ' id='texto-general'>
										Nombre del evento:
								</div>
							</div>
							<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
								{eventInfo?.name}
							</div>
						</div>
						<div className="flex">
							<div className="w-1/3 mx-2">
								<div className=' w-full h-10 mx-5 my-2 flex items-center justify-center text-white ' id='texto-general'>
										Nombre del evento:
								</div>
							</div>
							<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
								{eventInfo.type}
							</div>
						</div>
						<div className="flex">
							<div className="w-1/3 mx-2">
								<div className=' w-full h-10 mx-5 my-2 flex items-center justify-center text-white ' id='texto-general'>
										Entrenador encargado:
								</div>
							</div>
							<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
								{(entrenador.name + ' ' + entrenador.lastName + ' - ' + entrenador.cedula)}
							</div>
						</div>

						<div className="flex">
							<div className="w-1/3 mx-2">
								<div className='  w-full h-10 mx-5 my-2 flex items-center justify-center text-white ' id='texto-general'>
										Fecha del evento
								</div>
							</div>
							<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
								{fechaEvento}
							</div>
						</div>
						<div className='flex'>
							<div className="flex w-full">
								<div className="w-1/3 mx-2">
									<div className='  w-full h-10 mx-5 my-2 flex items-center justify-center text-white ' id='texto-general'>
										Descripcion del evento
									</div>
								</div>
								<textarea readOnly defaultValue={eventInfo?.description as string} className='bg-neutral-200  h-[200px] rounded-[20px] w-2/3 h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>

								</textarea>
							</div>
							<div>
								<div className="flex w-full justify-items-end justify-end">
									<div className=' h-10 mx-5 my-2 flex w-[70px] items-center justify-center text-white ' id='texto-general'>
										Hora inicio
									</div>
									<div className='bg-neutral-200 rounded-full w-[100px] h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										{horaI}
									</div>
								</div>
								<div className="flex w-full justify-items-end justify-end">
									<div className='h-10 mx-5 my-2 flex  w-[70px] items-center justify-center text-white ' id='texto-general'>
										Hora fin
									</div>
									<div className='bg-neutral-200 rounded-full w-[100px] h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										{horaF}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-2/3 pr-4">
						{(eventInfo.type == 'Reunion') && (
							<div className=" w-full  pr-4">
								<div className='flex justify-center'>
									<h1 className='text-center text-[400%]' id='titulos-grandes'>Participantes</h1>
								</div>
								<div className="flex items-center justify-center h-[250px]">
									<textarea
										required
										value={correos}
										readOnly
										className='bg-neutral-200 h-full w-full h-20 mx-5 my-2 pl-4 text-black' id='texto-general'
										placeholder='Participantes del evento'
									/>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="flex  justify-center items-center mt-4 ">
					<button type='button' onClick={() => handleClick()} className="bg-[#cd1919] text-white rounded p-2 mx-5 w-[300px]">
					        volver
					</button>
				</div>
			</div>
		</div>
	);
}
