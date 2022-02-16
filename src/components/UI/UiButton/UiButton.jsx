import React from 'react';
import PropTypes from "prop-types";

import '../index.css';
import styles from './UiButton.module.css';
import cn from 'classnames';

function UiButton({text, disabled, theme='dark', classes, onClick}) {
    return (
        <div>
            <button
                onClick={onClick}
                className={cn(styles.button, styles[theme], classes)}
                disabled={disabled}>{text}
            </button>
        </div>
    );
}

UiButton.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string
}

export default UiButton;