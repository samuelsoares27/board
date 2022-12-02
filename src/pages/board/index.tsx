
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock } from 'react-icons/fi'
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import styles from './styles.module.scss';
import Head from 'next/head';
import SupportButton from '../../components/SupportButton';



export default function Board() {
    return (
        <>
            <Head>
                <title>Minhas tarefas - Boards</title>
            </Head>
            <main className={styles.container}>
                <form>
                    <input
                        type="text"
                        placeholder='Digite sua tarefa'
                    />
                    <button type="submit">
                        <FiPlus size={25} color="#17181f" />
                    </button>
                </form>


                <h1>Você tem 2 tarefas!</h1>
                <section>
                    <article className={styles.taskList}>
                        <p>
                            Aprender Next.js
                        </p>
                        <div className={styles.actions}>
                            <div>
                                <div>
                                    <FiCalendar size={20} color="#ffb800" />
                                    <time>17 Julho 2021</time>
                                </div>
                                <button>
                                    <FiEdit2 size={20} color="#fff" />
                                    <span>Editar</span>
                                </button>
                            </div>
                            <button>
                                <FiTrash size={20} color="#ff3636" />
                                <span>Excluir</span>
                            </button>
                        </div>
                    </article>
                </section>
            </main>

            <div className={styles.vipContainer}>
                <h3>Obrigado por apoiar esse projeto.</h3>
                <div>
                    <FiClock size={28} color="#fff" />
                    <time>
                        Última doação foi a 3 dias.
                    </time>
                </div>
            </div>

            <SupportButton />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const session = await getSession({ req });

    if (!session?.user) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    console.log(session);

    return {
        props: {

        }
    }
}