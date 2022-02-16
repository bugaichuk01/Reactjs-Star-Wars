import React from 'react';
import {useLocation} from "react-router";
import img from '../../static/404.png'
import img_char from '../../static/404-char.png'

import styles from './Unknown.module.css'

function Unknown(props) {
    let location = useLocation();

    return (
        <div>
            <div className={styles.unknown__wrapper}>
                <img className={styles.unknown__image} src={img} alt="Not found"/>
                <img className={styles.unknown__image} src={img_char} alt="Not found"/>
            </div>
            <p className={styles.unknown__text}>No match for <u>{location.pathname}</u></p>
        </div>
    );
}

export default Unknown;
