import {NavLink} from "react-router-dom";

import styles from './Header.module.css';
import imgSpaceStation from '../../static/space-station.svg';

function Header(props) {
    return (
        <div className={styles.container}>
            <img src={imgSpaceStation} className={styles.logo} alt="Logo"/>
            <ul className={styles.list__container}>
                {/*<li><NavLink to='/'>Home</NavLink></li>*/}
                <li><NavLink to='/characters/?page=1'>Characters</NavLink></li>
                <li><NavLink to='/search'>Search</NavLink></li>
                <li><NavLink to='/favorites'>Favorites</NavLink></li>
                <li><NavLink to='/unknown'>Unknown</NavLink></li>
                <li><NavLink to='/error'>Error</NavLink></li>
            </ul>
        </div>
    );
}

export default Header;