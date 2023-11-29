import type { Metadata } from 'next';
import NavbarAdministrador from '@/components/navbarAdministrador';

export const metadata: Metadata = {
	title: 'Administrador'
};

export default function LayoutAdministrador({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<>
			<NavbarAdministrador />
			{children}
		</>
	);
}