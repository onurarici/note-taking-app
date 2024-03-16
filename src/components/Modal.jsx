import styles from './Modal.module.css';

export default function Modal({ children, onClose }) { // => props.children
    return (
        <>
            <div className={styles.backdrop}>
                <dialog open className={styles.modal}> {/* open = {true} */}
                    {children}
                </dialog>
            </div>
        </>
    );
} 