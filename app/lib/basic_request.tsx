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