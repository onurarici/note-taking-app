import styles from './Post.module.css';

export default function Post(props) { // => { author, body }
    return (
        <li className={styles.post}>
            <p className={styles.author}>{props.author}</p>
            <p className={styles.text}>{props.body}</p>
        </li>
    )
} 