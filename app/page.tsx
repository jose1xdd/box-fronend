import NavbarHome from '@/components/navbar/navbarHome';
import Image from 'next/image';
import Logo from '@/public/images/logo.png';

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

export default function Home() {
	return (
		<>
			<NavbarHome />
			<div className="container mx-auto mt-8">
				<h1 className={`${bebas.className} text-center text-[500%]`} style={{ textShadow: '3px 3px 0 #cd1919' }}>LIGA DE BOXEO NORTE</h1>

				<div className="p-4 max-w-5xl mx-auto my-5">
					<div className="flex">
						<div className="w-2/3 pr-4">
							<h2 className={`${bebas.className} text-[380%]`}>MISIÓN</h2>
							<div className={`${barlow.className} bg-neutral-200 rounded-lg w-full p-5 flex items-center justify-center text-black`}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate blanditiis omnis illo voluptas, tempore aspernatur. Dolores, tempora similique at vitae excepturi placeat nihil veniam inventore et expedita eligendi tenetur rerum.
							</div>
						</div>
						<div className="w-1/3 flex justify-center items-center">
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
				<div className="p-4 max-w-5xl mx-auto my-5">
					<div className="flex">
						<div className="w-1/3 flex justify-center items-center">
							<Image
								src={Logo}
								alt="Logo Liga de Boxeo de Norte de Santander"
								className="transform translate-x-[10px] translate-y-[20px]"
								width={125}
								height={25}
								priority
							/>
						</div>
						<div className="w-2/3 pr-4">
							<h2 className={`${bebas.className} text-[380%]`}>VISIÓN</h2>
							<div className={`${barlow.className} bg-neutral-200 rounded-lg w-full p-5 flex items-center justify-center text-black`}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate blanditiis omnis illo voluptas, tempore aspernatur. Dolores, tempora similique at vitae excepturi placeat nihil veniam inventore et expedita eligendi tenetur rerum.
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
