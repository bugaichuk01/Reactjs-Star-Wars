import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from './CharactersNav.module.css'
import UiButton from "../../UI/UiButton";


function CharactersNav({next, counter, prev}) {

    return (
        <div className={styles.link__container}>
            <Link className={styles.link} to={`/characters/?page=${counter - 1}`}>
                <UiButton text='Previous' disabled={!prev} />
            </Link>
            <Link className={styles.link} to={`/characters/?page=${counter + 1}`}>
                <UiButton text='Next' disabled={!next} />
            </Link>
        </div>
    );
}

CharactersNav.propTypes = {
    next: PropTypes.string,
    prev: PropTypes.string,
    counter: PropTypes.number,
}

export default CharactersNav;