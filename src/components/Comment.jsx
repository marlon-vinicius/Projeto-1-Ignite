import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';


export function Comment() {
    return (
       <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"/>
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Marlon</strong>
                        <time title='08 de Agosto às 20:00' dateTime='2022-08-08'>Cerca de 1h atrás</time>
                    </div>
                    <button title='Deletar comentário'>
                        <Trash size={24}/>
                    </button>
                    </header>
                <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>
            <footer>
                <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
       </div> 
    )
}