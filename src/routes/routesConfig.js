import Home from "../containers/home";
import Characters from "../containers/characters";
import Unknown from "../containers/unknown";
import CharacterPage from "../containers/character-page";
import Favorites from "../containers/favorites";
import CharactersSearch from "../containers/characters-search";
import ErrorMessage from "../components/error-message";

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: <Home />
    },
    {
        path: '/characters',
        exact: true,
        component: <Characters />
    },
    {
        path: '/characters/:id',
        exact: true,
        component: <CharacterPage />
    },
    {
        path: '/search',
        exact: true,
        component: <CharactersSearch />
    },
    {
        path: '/favorites',
        exact: true,
        component: <Favorites />
    },
    {
        path: '/unknown',
        exact: true,
        component: <Unknown />
    },
    {
        path: '/error',
        exact: true,
        component: <ErrorMessage />
    },
    {
        path: '*',
        exact: false,
        component: <Unknown />
    }
];

export default routesConfig;