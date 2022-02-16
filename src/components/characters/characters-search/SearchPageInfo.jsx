import React from 'react';
import {Link} from "react-router-dom";
import styles from './SearchPageInfo.module.css'

function SearchPageInfo({characters}) {
    return (
        <>
            {characters.length
                ? (
                    <ul className={styles.list__container}>
                        {characters.map(({ id, name, photo }) =>
                            <li className={styles.list__item} key={id}>
                                <Link to={`/characters/${id}`}>
                                    <img src={photo} className={styles.character__photo} alt={name} />
                                    <p>{name}</p>
                                </Link>
                            </li>
                        )}
                    </ul>
                )
                : <h2 className={styles.person__comment}>No results</h2>
            }
        </>
    );
}

export default SearchPageInfo;