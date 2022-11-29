import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import SignInButton from '../SignInButton';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.divContainer}>
                <Link href={"/"}>
                    <Image src="/images/logo.svg" alt="logo meu board" width={50} height={50} />
                </Link>
                <nav>
                    <Link href={"/"} legacyBehavior>
                        <a>Home</a>
                    </Link>
                    <Link href={"/board"} legacyBehavior>
                        <a>Meu Board</a>
                    </Link>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}