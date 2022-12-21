import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {makeCuncurrentResponse} from "@utils/network";

import s from "./PersonFilms.module.css"

const PersonFilms = ({personFilms}) => {
    const [filmsName, setFilmsName] = useState([])

    useEffect(() => {
        (async () => {
            const response = await makeCuncurrentResponse(personFilms)
            setFilmsName(response);
        })()
    }, [])


    return (
        <div className={s.wrapper}>
            <ul className={s.list__container}>
                {filmsName
                    .sort((a, z) => a.episode_id - z.episode_id)
                    .map(({title, episode_id}) =>
                        <li className={s.list__item} key={episode_id}>
                            <span className={s.item__episode}>Episode {episode_id}</span>
                            <span className={s.item__colon}> : </span>
                            <span className={s.item__title}>{title}</span>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}
export default PersonFilms