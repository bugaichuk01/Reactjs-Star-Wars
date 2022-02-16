import React from 'react';
import PropTypes from "prop-types";
import styles from './CharacterInfo.module.css';

function CharacterInfo({character}) {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {character.map(({title, data}) => (
                    data && (
                        <li className={styles.list__item} key={title}>
                                <span className={styles.item__title}>
                                    {title}: {data}
                                </span>
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
}

CharacterInfo.propTypes = {
    character: PropTypes.array
}

export default CharacterInfo;