import {SWAPI_ROOT, IMG_URL, IMG_EXTENSION, SWAPI_CHARACTERS} from "../constants/api";

const getId = (url, category) => {
    return url.replace(SWAPI_ROOT + category, '').replace(/\//g, '');
}

export const getCharactersId = (url) => {
    return getId(url, SWAPI_CHARACTERS);
}

export const getCharactersImage = (id) => {
    return `${IMG_URL}/${id + IMG_EXTENSION}`;
}