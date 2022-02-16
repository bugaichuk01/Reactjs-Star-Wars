import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import styles from './CharactersList.module.css'

function CharactersList({characters}) {
    return (
        <ul className={styles.list__container}>
            {characters.map((el) =>
                <li className={styles.list__item} key={el.id}>
                    <Link to={`/characters/${el.id}`}>
                        <img className={styles.character__photo} src={el.photo} alt={el.name}/>
                        <p>{el.name}</p>
                    </Link>
                </li>)}
        </ul>
    );
}

CharactersList.propTypes = {
    characters: PropTypes.array
}

export default CharactersList;