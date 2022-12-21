import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import UiButton from "@ui/UiButton";

import s from './PeopleNavigation.module.css'

const PeopleNavigation = ({getResource, counterPage, nextPage, prevPage}) => {
    const handleChangeNext = () => getResource(nextPage);
    const handleChangePrev = () => getResource(prevPage);



    return (
        <div className={s.container}>
            <Link to={`/people?page=${counterPage-1}`} className={s.buttons}>
                <UiButton
                    text="Previous"
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`/people?page=${counterPage+1}`} className={s.link}>
                <UiButton
                    text="Next"
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                />
            </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
    getResource : PropTypes.func,
    counterPage : PropTypes.number,
    nextPage : PropTypes.string,
    prevPage : PropTypes.string,
}

export default PeopleNavigation