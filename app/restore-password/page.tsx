'use client';

import loginData from '@/pruebas/login.json';
import { Modal } from '@/components/Modal';
import { Form } from '@/components/form';
import { useState, useEffect } from 'react';

export default function RestorePassword() {
	const [information, setInformation] = useState({
		password1: '',
		password2: '',
	});

	const [passwordsMatch, setPasswordsMatch] = useState(true);
	const [emptyFields, setEmptyFields] = useState({
		password1: false,
		password2: false,
	});

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState({ title: '', message: '', imagen: '' });

	function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
		const { name, value } = e.target;
		setInformation((prev) => ({ ...prev, [name]: value }));
		setEmptyFields((prev) => ({ ...prev, [name]: false }));
	}

	function handleModalClose() {
		setIsModalOpen(false);
	  }

	  function handleSubmit(): void {
		// Verificar campos vacíos
		const fieldsToCheck = ['password1', 'password2'];
		const areFieldsEmpty = fieldsToCheck.some(
		  (field) => (information as Record<string, string>)[field].trim() === ''
		);

		if (areFieldsEmpty) {
		  // Campos vacíos, establece el estado de campos vacíos y devuelve
		  setEmptyFields({
				password1: information.password1.trim() === '',
				password2: information.password2.trim() === '',
		  });
		  return;
		}

		// Limpiar el estado de campos vacíos si no están vacíos
		setEmptyFields({ password1: false, password2: false });

		if (information.password1 === information.password2) {
		  // Contraseñas coinciden
		  const userIndex = loginData.findIndex((userData: any) => {
				return userData.Nombre === 'Kevin Tarazona';
		  });

		  if (userIndex !== -1) {
			// Cambiar la contraseña en el JSON para el usuario con el nombre "Kevin Tarazona"
				alert('indice' + userIndex + '\n' + 'Contraseña antigua: ' + loginData[userIndex].password + '\n' + 'Nueva contraseña: ' + information.password1);
				loginData[userIndex].password = information.password1;

				// Muestra el modal con el mensaje de éxito
				setModalContent({
			  title: 'Contraseña cambiada correctamente',
			  message: 'Has cambiado correctamente la contraseña.',
			  imagen: 'M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z',
				});

				setIsModalOpen(true);
		  }
		} else {
		  // Contraseñas no coinciden, muestra el mensaje de error
		  setPasswordsMatch(false);

		  // Después de 2 segundos, limpia los mensajes de error y los inputs
		  setTimeout(() => {
				setPasswordsMatch(true);
				setInformation({ password1: '', password2: '' });
		  }, 2000);
		}
	  }

	  return (
		<>
		  <Form
				className='flex justify-center flex-col space-y-4'
				title1=""
				title2=""
				title3="Cambia tu contraseña"
				description=""
				onSubmit={handleSubmit}
		  >
				{emptyFields.password1 && (
			  <p className="text-red-600 text-center mb-2">
				El campo no puede estar vacío
			  </p>
				)}
				<Form.Input
			  className={emptyFields.password1 ? 'border-red-500' : ''}
			  label=""
			  name="password1"
			  placeholder="Ingresa tu nueva contraseña..."
			  onChange={handleInput}
			  value={information.password1}
			  type="password"
				/>
				{emptyFields.password2 && (
			  <p className="text-red-600 text-center mb-2">
				El campo no puede estar vacío
			  </p>
				)}
				<Form.Input
			  className={emptyFields.password2 ? 'border-red-500' : ''}
			  label=""
			  name="password2"
			  placeholder="Confirma tu contraseña..."
			  onChange={handleInput}
			  value={information.password2}
			  type="password"
				/>
				{!passwordsMatch && (
			  <p className="text-red-600 text-center mt-2">
				Las contraseñas no coinciden
			  </p>
				)}
				<div className="flex justify-center mt-4">
			  <Form.SubmitButton
						buttonText="Cambiar contraseña"
						handleButton={handleSubmit}
			  />
				</div>
		  </Form>

		  {/* Modal para mensajes */}
		  <Modal
				isOpen={isModalOpen}
				onClose={handleModalClose}
				title={modalContent.title}
				imagen={modalContent.imagen}
		  >
				<p>{modalContent.message}</p>
		  </Modal>
		</>
	  );
}
