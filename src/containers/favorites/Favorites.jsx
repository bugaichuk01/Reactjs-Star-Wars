import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import CharactersList from "../../components/characters/characters-list";

function Favorites({setError}) {
    const [characters, setCharacters] = useState([]);
    const data = useSelector(state => state);

    useEffect(() => {
        const array = Object.entries(data);

        if(array.length) {
            const result = array.map((item) => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })
            setCharacters(result)
        }
    }, [data])

    return (
        <div>
            <h1>Favorite characters</h1>
            {characters.length ?
                <CharactersList characters={characters} />
                : <h2>No data yet</h2>
            }
        </div>
    );
}


export default Favorites;
