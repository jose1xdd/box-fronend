'use client';

import { Form } from '@/components/form';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LoginPage() {
	const [information, setInformation] = useState({
		password1: '',
		password2: '',
	});

	const [passwordsMatch, setPasswordsMatch] = useState(true);
	const [emptyFields, setEmptyFields] = useState({
		password1: false,
		password2: false,
	});

	function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
		const { name, value } = e.target;
		setInformation((prev) => ({ ...prev, [name]: value }));
		setEmptyFields((prev) => ({ ...prev, [name]: false }));
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
			// Contraseñas coinciden, realiza las acciones necesarias al enviar el formulario
			alert('Contraseña cambiada con éxito: ' + information.password1);
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
				title1=""
				title2=""
				title3="Cambia tu contraseña"
				description=""
				onSubmit={handleSubmit}
				className=''
			>
				{emptyFields.password1 && (
					<p className="text-red-600 text-center mb-2">
            El campo no puede estar vacío
					</p>
				)}
				<Form.Input
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
		</>
	);
}
