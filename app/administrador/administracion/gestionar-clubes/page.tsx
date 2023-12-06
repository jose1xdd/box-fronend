import Tabla from '@/components/tablas/clubes';

export default function GestionarClubesAdmin() {
	return (
		<>
			<div className='w-[80%] mx-auto mt-[6%]'>
				<h1 className='text-[300%]' id='textos-grandes'>CLUBES</h1>
			</div>
			<Tabla />
		</>
	);
}