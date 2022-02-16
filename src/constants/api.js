export const SWAPI_ROOT = 'https://swapi.dev/api/';
export const SWAPI_CHARACTERS = 'people';
export const SWAPI_PLANETS = 'planets';
export const SWAPI_PARAMS_PAGE = '/?page=';
export const SWAPI_PARAMS_SEARCH = '/?search=';

export const API_CHARACTERS = SWAPI_ROOT + SWAPI_CHARACTERS + SWAPI_PARAMS_PAGE;
export const API_CHARACTER = SWAPI_ROOT + SWAPI_CHARACTERS;
export const API_SEARCH = SWAPI_ROOT + SWAPI_CHARACTERS + SWAPI_PARAMS_SEARCH;

export const API_PLANETS = SWAPI_ROOT + SWAPI_PLANETS + SWAPI_PARAMS_PAGE;

//images
const IMG_ROOT = 'https://starwars-visualguide.com/assets/img/'
const IMG_CHARACTERS = 'characters';
export const IMG_EXTENSION = '.jpg';

export const IMG_URL = IMG_ROOT + IMG_CHARACTERS