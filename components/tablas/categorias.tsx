'use client';

import categoriasData from '@/pruebas/categorias.json';
import Link from 'next/link';

export default function TableClubes() {

	const categorias = categoriasData.weightCategory;

	return (
		<>
			<div className='flex justify-center items-center'>
				<table className="w-[80%] mx-auto">
					<thead>
						<tr>
							<th
								className="border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center text-[150%] tracking-widest"
								id="titulos-grandes"
							>
								CLUB
							</th>
							<th
								className="border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center text-[150%] tracking-widest"
								id="titulos-grandes"
							>
								RANGO DE PESO (KG)
							</th>
							<th
								className="border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center text-[150%] tracking-widest"
								id="titulos-grandes"
							>
								ACCIONES
							</th>
						</tr>
					</thead>
					<tbody>
						{categorias.map((categoria) => (
							<tr key={categoria._id}>
								<td className=" border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-center text-black">
									{categoria.name}
								</td>
								<td className=" border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-center text-black">
									[{categoria.minWeight} - {categoria.maxWeight}]
								</td>
								<td className=" border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-center text-black">
									<button onClick={() => alert('Visualizar')} className="bg-[#cd1919] text-white rounded p-2">
										<svg
											className="ml-0.5"
											xmlns="http://www.w3.org/2000/svg"
											height="1em"
											viewBox="0 0 512 512"
											fill="#ffffff"
										>
											<path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
										</svg>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}