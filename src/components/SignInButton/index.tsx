import styles from './style.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export default function SignInButton() {

    const session = true;

    return session ? (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => { }}
        >
            <img src="https://sujeitoprogramador.com/steve.png" alt="logo meu board" />
            Olá Samuel
            <FiX color="##737380" className={styles.closeIcon} />

        </button>
    )
        : (
            <button
                type="button"
                className={styles.signInButton}
                onClick={() => { }}
            >
                <FaGithub
                    color="#ffb800"
                />
                Entrar com github
            </button>
        )
}