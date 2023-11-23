'use client';

import loginData from '@/pruebas/login.json';
import { Modal } from '@/components/modal';
import { Form } from '@/components/form';
import { useState } from 'react';

export default function LoginPage() {
	const [information, setInformation] = useState({
	  email: '',
	});

	const [isEmpty, setIsEmpty] = useState(false);
	const [isInvalidEmail, setIsInvalidEmail] = useState(false);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState({ title: '', message: '', imagen: '' });

	function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
	  const { name, value } = e.target;
	  setInformation((prev) => ({ ...prev, [name]: value }));
	  setIsEmpty(false);
	  setIsInvalidEmail(false);
	}

	function handleModalClose() {
	  setIsModalOpen(false);
	}

	function handleSubmit(): void {
	  if (information.email.trim() === '') {
			setIsEmpty(true);
			return;
	  }

	  if (!isValidEmail(information.email)) {
			setIsInvalidEmail(true);
			return;
	  }

	  // Verifica si el correo está registrado
	  const user = loginData.find((userData: any) => {
			return userData['correo-electronico'] === information.email;
	  });

	  if (!user) {
		// El correo no está registrado, muestra modal de usuario no registrado
			setModalContent({
		  title: 'Usuario no registrado',
		  message: 'No hay ningún usuario registrado, contacta con el administrador.',
		  imagen: 'M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2'
			});
			setIsModalOpen(true);
	  } else {
		// El correo está registrado, muestra modal de éxito
			setModalContent({
		  title: 'Correo enviado exitosamente',
		  message: 'Correo enviado satisfactoriamente, revisa la bandeja de entrada.',
		  imagen: 'M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z'
			});
			setIsModalOpen(true);
	  }
	}

	function isValidEmail(email: string): boolean {
	  return email.includes('@');
	}

	return (
	  <>
			<Form
		  className='flex flex-col space-y-4'
		  title1=""
		  title2=""
		  title3="Recuperar contraseña"
		  onSubmit={handleSubmit}
		  description=""
			>
		  <div className="my-[10px] flex flex-col gap-4">
					<Form.Input
			  className={isEmpty ? 'border-red-500' : ''}
			  label=""
			  name="email"
			  placeholder="Ingresa tu correo..."
			  onChange={handleInput}
			  value={information.email}
			  type="text"
					/>
					{isEmpty && (
			  <p className="text-red-600">El campo de correo no puede estar vacío</p>
					)}
					{isInvalidEmail && (
			  <p className="text-red-600">Por favor, ingresa un correo válido</p>
					)}
		  </div>

		  <div className="flex gap-4">
					<Form.SubmitButton
			  buttonText="ENVIAR CORREO"
			  handleButton={handleSubmit}
					/>
					<Form.Footer
			  description=""
			  link="../login"
			  textLink="Volver a inicio"
					/>
		  </div>
			</Form>

			{/* Modal para mensajes */}
			<Modal isOpen={isModalOpen} onClose={handleModalClose} title={modalContent.title} imagen={modalContent.imagen}>
		  <p>{modalContent.message}</p>
			</Modal>
	  </>
	);
}