'use client';
//'use strict';

import loginData from '@/pruebas/login.json';
import { Form } from '@/components/form';
import { useState } from 'react';
import axios from 'axios';

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

	async function handleButton(): Promise<void> {
		try {
		  const response = await axios.post('https://deportnortbox-api.ddns.net/users/download/Deportistas', {
				firstName: 'Fred',
				lastName: 'Flintstone'
		  });

		  // Si la solicitud fue exitosa, puedes acceder a los datos de la respuesta
		  const user = response.data;

		  // Asegurar que los datos ingresados son correctos
		  if (user) {
			// Coincidencia encontrada, muestra alerta de inicio de sesión
				setInformation({ email: '', password: '' });
				setIncorrectData(false);
				alert(`¡Bienvenido, ${user.Nombre}! Has iniciado sesión.`);
		  } else {
			// No hay coincidencia, muestra alerta de datos incorrectos
				setInformation({ email: '', password: '' });
				setIncorrectData(true);
		  }
		} catch (error) {
		  // Manejar el error aquí
		  alert(error);
		}
	  }

	//Prueba
	/* function handleButton(): void {
		// Busca en el archivo JSON si hay coincidencia de correo y contraseña
		const user = (async () => {

			try{
				return await axios.post('https://deportnortbox-api.ddns.net/login', {
					firstName: 'Fred',
					lastName: 'Flintstone'
			  });
			}catch(error){
				alert('Error');
			}

		}); */

	//Asegurar que los datos ingresados son ciertos

	/* if (user) {
		  // Coincidencia encontrada, muestra alerta de inicio de sesión
		  setInformation({ email: '', password: '' });
			setIncorrectData(false);
		  alert(`¡Bienvenido, ${user.Nombre}! Has iniciado sesión.`);
		} else {
		  // No hay coincidencia, muestra alerta de datos incorrectos
		  setInformation({ email: '', password: '' });
		  setIncorrectData(true);
		} */
	  //}

	return(
		<div className='flex justify-center align-center'>
			<img src="https://raw.githubusercontent.com/Tkalejadro122/API/ProyectosSistemas/young-woman-1333600_1920%20(1).png" alt="Imagen de una mujer joven" className='w-4/6'></img>
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