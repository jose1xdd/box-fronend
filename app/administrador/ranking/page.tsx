'use client';

import RankingTable from '@/components/tablas/ranking';
import data from '@/pruebas/usuarios.json';

export default function RankingAdmin() {
	return (
		<RankingTable data={data} filtroRol="entrenador" />
	);
}