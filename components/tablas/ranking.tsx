import '@/app/administrador/lista-usuarios/estilos.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

// Definir las propiedades del componente Table
interface TableProps {
  data: tablaRanking []
}

// Definir el componente funcional Table
const RankingTable: React.FC<TableProps> = ({ data }) => {
	console.log(data);
	// Estado para almacenar los datos filtrados
	const [filteredData, setFilteredData] = useState(data);
	// Estado para almacenar la página actual
	const [currentPage, setCurrentPage] = useState(0);
	// Número de usuarios por página
	const usersPerPage = 10;

	// Función para manejar el cambio de página
	const handlePageChange = (selectedPage: { selected: number }) => {
		const newPage = selectedPage.selected;
		if (newPage >= 0 && newPage < Math.ceil(filteredData.length / usersPerPage)) {
			setCurrentPage(newPage);
		}
	};

	// Función para manejar la búsqueda por nombre y rol
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchTerm = e.target.value.toLowerCase();
		const filtered = data.filter(
			(user) =>
				user.nombre.toLowerCase().includes(searchTerm)
		);
		setFilteredData(filtered);
		setCurrentPage(0);
	};

	// Función para renderizar las filas de usuarios
	const renderUsers = () => {
		const start = currentPage * usersPerPage;
		const end = start + usersPerPage;
		return filteredData.slice(start, end).map((item, index) => (
			<tr key={item.id}>
				<td className=" border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-center text-black">{item.nombre}</td>
				<td className=" border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-center text-black">{item.ranking.win}</td>
				<td className=" border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-center text-black">{item.ranking.lose}</td>
				<td className=" border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-center text-black">{item.ranking.draw}</td>
			</tr>
		));
	};

	// Renderizar el componente Table
	return (
		<div className=" w-[80%] mx-auto mt-5 p-5">
			<h1 className="text-5xl text-white mb-4">RANKING</h1>
			<input
				type="text"
				placeholder="Filtrar por nombre"
				onChange={handleSearch}
				className="px-5 py-2 rounded-[18px] bg-gray-200 focus:outline-none mb-4"
			/>
			<table className="w-full">
				<thead>
					<tr>
						<th className=" border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center">NOMBRE</th>
						<th className=" border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center">VICTORIAS</th>
						<th className=" border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center">DERROTAS</th>
						<th className=" border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center">EMPATES</th>
					</tr>
				</thead>
				<tbody>{renderUsers()}</tbody>
			</table>
			<ReactPaginate
				pageCount={Math.ceil(filteredData.length / usersPerPage)}
				onPageChange={handlePageChange}
				containerClassName="pagination flex gap-2 justify-center"
				activeClassName="active"
				pageLinkClassName="page-link"
				previousLabel={<button className="bg-[#cd1919] text-white rounded p-2">Previous</button>}
				nextLabel={<button className="bg-[#cd1919] text-white rounded p-2">Next</button>}
				pageRangeDisplayed={2}
				marginPagesDisplayed={1}
			/>
		</div>
	);
};

export default RankingTable;
