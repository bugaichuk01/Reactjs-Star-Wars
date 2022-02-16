import React from 'react';
import PropTypes from "prop-types";
import styles from './CharacterPhoto.module.css';
import {useDispatch} from "react-redux";
import UiButton from "../../UI/UiButton";
import {addToFavorite, removeFromFavorite} from "../../../store/actions";

function CharacterPhoto({photo, name, characterId, favorite}) {
    const dispatch = useDispatch();

    const add = () => {
        dispatch(addToFavorite({
                [characterId]: {
                    name: name,
                    photo: photo
                },
            }));
    }

    const remove = () => {
        dispatch(removeFromFavorite(characterId));
    }

    return (
        <div className={styles.container}>
            <img className={styles.photo} src={photo} alt={name}/>
            <UiButton theme={favorite ? 'light' : 'dark'}
                      classes={styles.button}
                      onClick={favorite ? remove : add}
                      text={favorite ? 'Remove from favorites' : 'Add to favorites'}/>
        </div>
    );
}

CharacterPhoto.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    characterId: PropTypes.string,
}

export default CharacterPhoto;