import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/images/logo.png';

import {
	Barlow_Semi_Condensed,
	Bebas_Neue,
	Exo_2
} from 'next/font/google';

const barlow = Barlow_Semi_Condensed({
	weight: ['100'],
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

export default function NavbarDeportista() {

	return (
		<nav className="bg-[#1e1e1e] p-4">
			<div className="container">
				<div className="flex justify-between">
					<div className="flex items-center">
						<div className="text-white font-bold text-xl">
							<div className="flex items-center">
								<div className="w-60 h-60 bg-[#141414] rounded-full flex items-center justify-center mr-4 absolute -top-14 -left-14">
									<Image
										src={Logo}
										alt="Logo Liga de Boxeo de Norte de Santander"
										className="transform translate-x-[10px] translate-y-[20px]"
										width={125}
										height={25}
										priority
									/>
								</div>
							</div>
						</div>
					</div>
					<ul className={`${exo.className} flex space-x-5 my-4 text-white`}>
						<li>
							<Link href=''>CALENDARIO</Link>
						</li>
						<li>
							<Link href=''>RANKING</Link>
						</li>
					</ul>
					<ul className="flex space-x-4 my-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="1.5em"
							viewBox="0 0 512 512"
							fill="#ffffff"
						>
							<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
						</svg>
						<li className={`${exo.className} flex text-white`}>
							<Link href='/'>Nombre del usuario</Link>
						</li>
						<svg
							className="my-1"
							xmlns="http://www.w3.org/2000/svg"
							height="1em"
							viewBox="0 0 512 512"
							fill="#ffffff"
						>
							<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
						</svg>
					</ul>
				</div>
			</div>
		</nav>
	);
}