import React, {useEffect, useState, Suspense} from 'react';
import PropTypes from "prop-types";
import {useParams} from "react-router";

import CharacterInfo from "../../components/character-page/character-info";
import CharacterPhoto from "../../components/character-page/character-photo";
import LinkBack from "../../components/character-page/link-back";
import {API_CHARACTER} from "../../constants/api";

import {getApi} from "../../utils/network";
import {WithErrorApi} from "../../hoc/withErrorApi";
import {getCharactersImage} from "../../services/getCharactersData";
import styles from './CharacterPage.module.css';
import UiLoading from "../../components/UI/UiLoading";
import {useSelector} from "react-redux";

//lazy loading
const CharacterFilms = React.lazy(() => import('../../components/character-page/character-films'));

function CharacterPage({setError}) {
    const [character, setCharacter] = useState(null);
    const [characterId, setCharacterId] = useState(null);
    const [name, setName] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [films, setFilms] = useState(null);
    const [favorite, setFavorite] = useState(false);

    const {id} = useParams();
    const data = useSelector(state => state);

    useEffect(() => {
        (async () => {
            const response = await getApi(API_CHARACTER + `/${id}`);

            if (response) {
                setCharacter([
                    {title: 'Height', data: response.height},
                    {title: 'Mass', data: response.mass},
                    {title: 'Hair color', data: response.hair_color},
                    {title: 'Skin color', data: response.skin_color},
                    {title: 'Eye color', data: response.eye_color},
                    {title: 'Birth year', data: response.birth_year},
                    {title: 'Gender', data: response.gender},
                ]);

                setName(response.name);
                setCharacterId(id);
                setPhoto(getCharactersImage(id));

                response.films.length && setFilms(response.films);

                setError(false);
            } else setError(true);
        })();
    }, [id, setError])

    useEffect(() => {
        data[id] ? setFavorite(true) : setFavorite(false);
    }, [data, favorite, id])

    return (
        <div>
            <LinkBack/>
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{name}</span>

                <div className={styles.container}>
                    <CharacterPhoto favorite={favorite} characterId={characterId} name={name} photo={photo}/>

                    {character && <CharacterInfo character={character}/>}
                    {films && (
                        <Suspense fallback={<UiLoading/>}>
                            <CharacterFilms films={films}/>
                        </Suspense>
                    )}
                </div>
            </div>
        </div>
    );
}

CharacterPage.propTypes = {
    setError: PropTypes.func
}

export default WithErrorApi(CharacterPage);