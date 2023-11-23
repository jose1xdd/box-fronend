'use client';

import { Form } from '@/components/form';
import { useState } from 'react';

export default function LoginPage() {
	const [information, setInformation] = useState({
	  email: '',
	});

	const [isEmpty, setIsEmpty] = useState(false);
	const [isInvalidEmail, setIsInvalidEmail] = useState(false);

	function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
	  const { name, value } = e.target;
	  setInformation((prev) => ({ ...prev, [name]: value }));
	  setIsEmpty(false);
	  setIsInvalidEmail(false);
	}

	function handleSubmit(): void {
	  if (information.email.trim() === '') {
		// Campo de correo vacío
			setIsEmpty(true);
			return;
	  }

	  if (!isValidEmail(information.email)) {
		// Correo no válido
			setIsInvalidEmail(true);
			return;
	  }

	  // Realizar acciones necesarias al enviar el formulario
	  alert('Correo ingresado: ' + information.email);
	}

	function isValidEmail(email: string): boolean {
	  // Verificar si el correo tiene un "@" (solo una validación básica)
	  return email.includes('@');
	}

	return (
	  <>
			<Form
				className=' flex flex-col space-y-4'
		  title1=""
		  title2=""
		  title3="Recuperar contraseña"
		  onSubmit={handleSubmit}
		  description=""
			>
		  <div className="my-[10px] flex flex-col gap-4">
					<Form.Input
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
			  buttonText="INGRESAR"
			  handleButton={handleSubmit}
					/>
					<Form.Footer
			  description=""
			  link="../login"
			  textLink="Volver a inicio"
					/>
		  </div>
			</Form>
	  </>
	);
}
