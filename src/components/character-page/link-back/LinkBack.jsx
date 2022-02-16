import React from 'react';
import styles from './LinkBack.module.css';
import {useNavigate } from "react-router-dom";
import UiButton from "../../UI/UiButton";

function LinkBack() {
    const navigate = useNavigate();

    const handleBack = (event) => {
        event.preventDefault();
        navigate(-1);
    }

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href='#' onClick={handleBack} className={styles.link}>
            <UiButton text='Go back' />
        </a>
    );
}

export default LinkBack;