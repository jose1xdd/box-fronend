'use client';
//'use strict';
import Image from 'next/image';
import loginData from '@/pruebas/login.json';
import { Form } from '@/components/form';
import { useState } from 'react';
import axios from 'axios';
import imagen from '@/public/images/loginImage.png';

export default function LoginPage() {

	const [information, setInformation] = useState({
		email: '', password: ''
	});
	const [incorrectData, setIncorrectData] = useState(false);

	function handleInput(e: React.ChangeEvent<HTMLInputElement>): void{
		const value:string = e.target.value;
		setInformation({ ... information, [e.target.name]: value });
		setIncorrectData(false);
	};

	const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

	async function handleButton(): Promise<void> {
		try {
		  const requestBody = {
				email: information.email,
				password: information.password,
		  };

		  const requestHeaders = {
				'Content-Type': 'application/json',
			// Agrega otros encabezados si son necesarios
		  };

		  const response = await axios.post(`${apiEndpoint}/login`, requestBody, {
				headers: requestHeaders,
		  });

		  // Si la solicitud fue exitosa, puedes acceder a los datos de la respuesta
		  const user = response.data;

		  // Asegurar que los datos ingresados son correctos
		  if (user) {
			// Coincidencia encontrada, muestra alerta de inicio de sesión
				setInformation({ email: '', password: '' });
				setIncorrectData(false);
				alert('¡Bienvenido, Has iniciado sesión.');
		  } else {
			// No hay coincidencia, muestra alerta de datos incorrectos
				setInformation({ email: '', password: '' });
				setIncorrectData(true);
		  }
		} catch (error) {
		  // Manejar el error aquí
		  alert('Ocurrió un error al procesar la solicitud.');
		}
	  }

	return(
		<div className='flex justify-center align-center'>
			<Image
				src={imagen}
				alt="Logo Liga de Boxeo de Norte de Santander"
				className="w4/6"
				priority
			/>
			<div className='flex flex-col items-end justify-center m-20'>
				<Form title1='LIGA DE' title2='BOXEO' title3='NORTE' onSubmit = {()=>{}} description='' className=''>
					<div className='my-[10px] flex flex-col gap-4'>
						{incorrectData && (
							<p className='text-red-500 mb-2'>Los datos ingresados son incorrectos</p>
						)}
						<Form.Input
							className=''
							label= ''
							name = 'email'
							placeholder='email'
							onChange = {handleInput}
							value = {information.email}
							type="text"
						/>
						<Form.Input
							className=''
							label= ''
							name = 'password'
							placeholder='Contraseña...'
							onChange = {handleInput}
							value = {information.password}
							type="password"
						/>
					</div>

					<div className='flex gap-4 '>
						<Form.SubmitButton buttonText='INGRESAR' handleButton={handleButton}/>
						<Form.Footer
							description=''
							link='/forget-password'
							textLink='¿Olvidaste la contraseña?'
						/>
					</div>

				</Form>
			</div>
		</div>

	);
}