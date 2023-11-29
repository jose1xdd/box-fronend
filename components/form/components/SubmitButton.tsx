import { Loader } from '@/components/loader';
import styles from './styles.module.scss';
interface SubmitButtonProps{
    buttonText: string
    isLoading?: boolean
	handleButton: any
}

export function SubmitButton({ buttonText, isLoading, handleButton }: SubmitButtonProps){
	return(
		<button className={styles.submitButton} type='submit' onClick={handleButton} disabled={isLoading}>
			{isLoading ? < Loader /> : buttonText}
		</button>
	);
}