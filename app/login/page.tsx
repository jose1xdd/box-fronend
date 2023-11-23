'use client';

import { Form } from '@/components/form';
import { useState } from 'react';

export default function LoginPage() {

	const [information, setInformation] = useState({
		email: '', password: ''
	});

	function handleInput(e: React.ChangeEvent<HTMLInputElement>): void{
		const value:string = e.target.value;
		setInformation({ ... information, [e.target.name]: value });
	};

	return(
		<div className='flex justify-center align-center'>
			<img src="https://raw.githubusercontent.com/Tkalejadro122/API/ProyectosSistemas/young-woman-1333600_1920%20(1).png" alt="Imagen de una mujer joven" className='w-4/6'></img>
			<div className='flex flex-col items-end justify-center m-20'>
				<Form title1='LIGA DE' title2='BOXEO' title3='NORTE' onSubmit = {()=>{}} description='' className=''>
					<div className='my-[10px] flex flex-col gap-4'>
						<Form.Input
							label= ''
							name = 'email'
							placeholder='email'
							onChange = {handleInput}
							value = {information.email}
							type="text"
						/>
						<Form.Input
							label= ''
							name = 'password'
							placeholder='Contraseña...'
							onChange = {handleInput}
							value = {information.password}
							type="password"
						/>
					</div>

					<div className='flex gap-4 '>
						<Form.SubmitButton buttonText='INGRESAR' handleButton={():void=> alert(information.email)}/>
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