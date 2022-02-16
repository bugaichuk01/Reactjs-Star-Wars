import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import styles from './CharacterFilms.module.css';
import {makeConcurrentRequest} from "../../../utils/network";
import UiLoading from "../../UI/UiLoading";

function CharacterFilms({films}) {
    const [filmsList, setFilmsList] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await makeConcurrentRequest(films);
            setFilmsList(response);
            setLoading(false);
        })();
}, [films])

    const spinner = loading ? <UiLoading/> : null;
    const content = <FilmsView filmsList={filmsList}/>

    return (
        <div className={styles.wrapper}>
            {spinner}
            {content}
        </div>
    );
}

const FilmsView = ({filmsList}) => {
    return (
        <React.Fragment>
            <ul className={styles.list__container}>
                {filmsList && filmsList.sort((a, b) => a.episode_id - b.episode_id).map(({title, episode_id}) => (
                    <li className={styles.list__item} key={episode_id}>
                        <span className={styles.item__episide}>Episode {episode_id}</span>
                        <span className={styles.item__colon}> : </span>
                        <span className={styles.item__title}>{title}</span>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
}

CharacterFilms.propTypes = {
    films: PropTypes.array
}

export default CharacterFilms;