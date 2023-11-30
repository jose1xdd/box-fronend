'use client';

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

export default function AdministracionAdmin() {

	return (
		<>
			<div className="container mx-auto mt-8">
				<h1 className={`${bebas.className} text-center text-[400%]`}>MENÚ DE ADMINISTRADOR</h1>
				<div className="p-4 max-w-5xl mx-auto flex">
					<div className="w-1/3 pr-4 m-0">
						<div className='m-0'>
							<svg
								className="my-1 mx-auto"
								xmlns="http://www.w3.org/2000/svg"
								height="15em"
								viewBox="0 0 512 512"
								fill="#ffffff"
							>
								<path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
							</svg>
							<div className='flex items-center justify-center'>
								<button className={`${exo.className} bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg`}>
							        Cambiar logo
								</button>
							</div>
						</div>
						<div className='mx-0 my-5'>
							<svg
								className="my-1 mx-auto"
								xmlns="http://www.w3.org/2000/svg"
								height="15em"
								viewBox="0 0 512 512"
								fill="#ffffff"
							>
								<path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
							</svg>
							<div className='flex items-center justify-center'>
								<button className={`${exo.className} bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg`}>
							        Administrar categorías
								</button>
							</div>
						</div>
					</div>
					<div className="w-1/3 pr-4 m-0">
						<div className='m-0'>
							<svg
								className="my-1 mx-auto"
								xmlns="http://www.w3.org/2000/svg"
								height="15em"
								viewBox="0 0 512 512"
								fill="#ffffff"
							>
								<path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
							</svg>
							<div className='flex items-center justify-center'>
								<button className={`${exo.className} bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg`}>
							        Evaluación física
								</button>
							</div>
						</div>
						<div className='mx-0 my-5'>
							<svg
								className="my-1 mx-auto"
								xmlns="http://www.w3.org/2000/svg"
								height="15em"
								viewBox="0 0 512 512"
								fill="#ffffff"
							>
								<path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
							</svg>
							<div className='flex items-center justify-center'>
								<button className={`${exo.className} bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg`}>
							        Gestionar categorías
								</button>
							</div>
						</div>
					</div>
					<div className="w-1/3 pr-4 m-0">
						<div className='m-0'>
							<svg
								className="my-1 mx-auto"
								xmlns="http://www.w3.org/2000/svg"
								height="15em"
								viewBox="0 0 512 512"
								fill="#ffffff"
							>
								<path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
							</svg>
							<div className='flex items-center justify-center'>
								<button className={`${exo.className} bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg`}>
							        Gestionar clubes
								</button>
							</div>
						</div>
						<div className='mx-0 my-5'>
							<svg
								className="my-1 mx-auto"
								xmlns="http://www.w3.org/2000/svg"
								height="15em"
								viewBox="0 0 512 512"
								fill="#ffffff"
							>
								<path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
							</svg>
							<div className='flex items-center justify-center'>
								<button className={`${exo.className} bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg`}>
							        Gestionar index
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}