import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {WithErrorApi} from "../../hoc/withErrorApi";
import CharactersList from "../../components/characters/characters-list";
import {getApi} from "../../utils/network";
import {API_CHARACTERS} from '../../constants/api';
import {getCharactersId, getCharactersImage} from "../../services/getCharactersData";
import {useQueryParams} from "../../hooks/useQueryParams";
import CharactersNav from "../../components/characters/characters-nav";
import UiLoading from "../../components/UI/UiLoading";

import style from './Characters.module.css'

function Characters({setError}) {
    const [characters, setCharacters] = useState(null);
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);
    const [counter, setCounter] = useState(null);
    const [loading, setLoading] = useState(true);

    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResource = async (url) => {
        const response = await getApi(url);
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
            setPrev(response.previous);
            setNext(response.next);
            setCounter(Number(queryPage));
            setError(false);
            setLoading(false)
        } else {
            setError(true);
            setLoading(false)
        }
    }

    useEffect(() => {
        getResource(API_CHARACTERS + queryPage);
    }, [queryPage])

    const spinner = loading ? <UiLoading/> : null;
    const content = <CharactersList characters={characters}/>

    return (
        <div>
            <CharactersNav getResource={getResource} prev={prev} next={next} counter={counter}/>
            <div className={style.character__wrapper}>
                {spinner}
                {characters && content}
            </div>
        </div>
    );
}

Characters.propTypes = {
    setError: PropTypes.func
}

export default WithErrorApi(Characters);
