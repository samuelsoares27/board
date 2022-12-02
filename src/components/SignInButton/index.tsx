import styles from './style.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInButton() {

    const { data: session, status } = useSession()
    let url = session?.user?.image;

    return session ? (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
        >

            <img src={url ?? ''} alt="logo meu board" />
            Olá {session?.user?.name}
            <FiX color="##737380" className={styles.closeIcon} />

        </button>
    )
        : (
            <button
                type="button"
                className={styles.signInButton}
                onClick={() => signIn('github')}
            >
                <FaGithub
                    color="#ffb800"
                />
                Entrar com github
            </button>
        )
}