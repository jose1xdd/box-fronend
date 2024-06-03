import { Loader } from '@/components/loader';
import styles from './styles.module.scss';
interface SubmitButtonProps{
    buttonText: string
    isLoading?: boolean
	handleButton: any
	disable: boolean
}

export function SubmitButton({ buttonText, isLoading, disable: disable, handleButton }: SubmitButtonProps){
	return(
		<button className={disable == true ? styles.submitButtonDisabled : styles.submitButtonEnabled} type='button' onClick={handleButton} disabled={disable}>
			{isLoading ? < Loader /> : buttonText}
		</button>
	);
}