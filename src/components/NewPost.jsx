import { useState } from 'react';

import styles from './NewPost.module.css';

export default function NewPost(props) {

    const [ enteredBody, setEnteredBody ] = useState('');
    const [ enteredAuthor, setEnteredAuthor ] = useState('');

    function bodyChangeHandler(e) {
        setEnteredBody(e.target.value); 
    }

    function authorChangeHandler(e) {
        setEnteredAuthor(e.target.value); 
    }

    function submitHandler(e) {
        e.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        console.log(postData);
        props.onAddPost(postData);
        props.onCancel();
    }

    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorChangeHandler}/>
            </p>
            <p className={styles.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    )
};