import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import Favorite from '@components/Favorite/Favorite'
import { useTheme, THEME_LiGHT, THEME_DARK, THEME_NEITRAL} from '@context/ThemeProvider'
import imgDroid from './img/droid.svg'
import imgLightsaber from './img/lightsaber.svg'
import imgSpaceStation from './img/space-station.svg'

import s from "./Header.module.css"


const Header = () => {
    const [icon, setIcon] = useState(imgSpaceStation)
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LiGHT: setIcon(imgLightsaber); break;
            case THEME_DARK: setIcon(imgDroid); break
            case THEME_NEITRAL: setIcon(imgSpaceStation); break
            default: setIcon(imgSpaceStation);
        }
    }, [isTheme])

    return (
        <div className={s.container}>
            <img className={s.logo} src={icon} alt="Star Wars"/>

            <ul className={s.list__container}>
                <li> <NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people?page=1">People</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/fail">Fail</NavLink></li>
                <li><NavLink to="/not-found">Not Found</NavLink></li>
            </ul>
            <Favorite />
        </div>
    )
}
export default Header