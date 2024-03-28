import axios from 'axios';

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

export interface indexInformation {
    '_id': '',
    'mision': '',
    'vision': '',
    'section': []
};

export const cargarInformacionIndex = async () : Promise<indexInformation | null> => {
	// const datos = localStorage.getItem('userData');
	// let token;
	// if(datos != null){
	// 	token = JSON.parse(datos).token;
	// }
	try {
		const response = await axios.get(`${apiEndpoint}/indexPag`);
		return response.data.infoIndex;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const obtenerFotoPerfil = async () : Promise<string> => {
	const datos = localStorage.getItem('userData');
	let token, userId;
	if(datos != null){
		token = JSON.parse(datos).token;
		userId = JSON.parse(datos).userId;
	}
	const headers = {
		sessiontoken: token
	};
	const parametros = {
		userId: userId
	};
	try {
		const response = await axios.get(`${apiEndpoint}/users/${userId}/getUserImage`, {
			params: parametros,
			headers: headers
		});
		return response.data.image;
	} catch (error) {
		console.log(error);
		return 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
	}
};

function base64StringToFile(base64String: string, filename: string) {
	// Extraer los datos base64 de la cadena
	const data = base64String.split(';base64,')[1];
	// Convertir los datos base64 en un ArrayBuffer
	const byteCharacters = atob(data);
	const byteNumbers = new Array(byteCharacters.length);
	for (let i = 0; i < byteCharacters.length; i++) {
	  byteNumbers[i] = byteCharacters.charCodeAt(i);
	}
	const byteArray = new Uint8Array(byteNumbers);
	// Crear un nuevo objeto Blob a partir del ArrayBuffer
	const blob = new Blob([byteArray], { type: 'image/png' });
	// Crear un objeto File a partir del Blob
	const file = new File([blob], filename, { type: 'image/png' });
	return file;
}

export const ActualizarFotoPerfil = async (nImagen: string) : Promise<void> => {
	const datos = localStorage.getItem('userData');
	let token, userId;
	if(datos != null){
		token = JSON.parse(datos).token;
		userId = JSON.parse(datos).userId;
	}
	const headers = {
		sessiontoken: token
	};
	const parametros = {
		userId: userId
	};
	const formData = new FormData();
	const FileImage = base64StringToFile(nImagen, `${userId}.png`);
	formData.append('image', FileImage);

	try {
		const response = await axios.post(`${apiEndpoint}/users/${userId}/uploadImage`, formData, {
			headers: headers,
			params: parametros,
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return;
	}
};