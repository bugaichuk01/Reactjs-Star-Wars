import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import cn from 'classnames';

import spinnerLight from './img/spinner-light.svg';
import spinnerDark from './img/spinner-dark.svg';

import '../index.css';
import styles from './UiLoading.module.css';

function UiLoading({theme, classes}) {
    const [spinner, setSpinner] = useState(null);

    useEffect(() => {
        switch (theme) {
            case 'light': setSpinner(spinnerLight); break;
            case 'dark': setSpinner(spinnerDark); break;
            default: setSpinner(spinnerLight);
        }
    }, [theme]);

    return (
        <div>
            <img src={spinner} className={cn(styles.spinner, styles.shadow)} alt="loading..."/>
        </div>
    );
}

UiLoading.propTypes = {
    theme: PropTypes.string,
    classes: PropTypes.string
}

export default UiLoading;