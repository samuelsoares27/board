import styles from './style.module.scss';
import Link from 'next/link';
import SignInButton from '../SignInButton';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <img src="/images/logo.svg" alt="Logo Meu board" />
                </Link>
                <nav>
                    <Link href="/" legacyBehavior>
                        <a>Home</a>
                    </Link>
                    <Link href="/board" legacyBehavior>
                        <a>Meu board</a>
                    </Link>
                </nav>

                <SignInButton />

            </div>
        </header>
    )
}