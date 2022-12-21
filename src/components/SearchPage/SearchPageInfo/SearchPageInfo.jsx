import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import s from './SearchPageInfo.module.css'


const SearchPageInfo = ({people}) => (
    <>
        {people.length
            ? (
                <ul className={s.list__container}>
                    {people.map(({id, img, name}) =>
                        <li key={id} className={s.list__item}>
                            <Link to={`/people/${id}`}>
                                <img src={img} alt={name} className={s.person__photo}/>
                                <p className={s.person__name}>{name}</p>
                            </Link>
                        </li>
                    )}
                </ul>
            )
            : <h2 className={s.person__comment}>No results</h2>}
    </>
)


SearchPageInfo.propTypes = {
    people: PropTypes.array
}

export default SearchPageInfo