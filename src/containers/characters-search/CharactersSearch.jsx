import React, {useCallback, useEffect, useState} from 'react';
import {API_SEARCH} from "../../constants/api";
import {getApi} from "../../utils/network";
import {getCharactersId, getCharactersImage} from "../../services/getCharactersData";
import {WithErrorApi} from "../../hoc/withErrorApi";
import SearchPageInfo from "../../components/characters/characters-search";
import styles from './CharactersSearch.module.css';
import {debounce} from "lodash";

function CharactersSearch({setError}) {
    const [characters, setCharacters] = useState([]);

    const getResponse = async (param) => {
        const response = await getApi(API_SEARCH + param);

        if (response) {
            const list = response.results.map(({name, url}) => {
                const id = getCharactersId(url);
                const photo = getCharactersImage(id);

                return {
                    id,
                    name,
                    photo
                }
            });
            setCharacters(list);
            setError(false);
        } else {
            setError(true);
        }
    }

    useEffect(() => {
        getResponse('');
    }, [])

    const debounceGetREsponse = useCallback(
        debounce(value => getResponse(value), 500),
        []);

    const handleInputChange = (event) => {
        debounceGetREsponse(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                onChange={handleInputChange}
                placeholder="Input your character's name"
                className={styles.input}
            />
            <SearchPageInfo characters={characters}/>
        </div>
    );
}

export default WithErrorApi(CharactersSearch);