import PropTypes from "prop-types";
import {useDispatch} from "react-redux";

import { setPersonToFavorite, removePersonFromFavorite} from "../../../store/actions";

import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favorite-fill.svg'

import s from './PersonPhoto.module.css'

const PersonPhoto = ({personPhoto, personName, personId, favorite, setFavorite}) => {
    const dispatch = useDispatch()

    const dispatchFavorite = () => {
        if (favorite) {
            dispatch(removePersonFromFavorite(personId))
            setFavorite(false)
        }
        else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                }
            }))
            setFavorite(true)
        }
    }

    return (
        <>
            <div className={s.container}>
                <img className={s.photo} src={personPhoto} alt={personName}/>
                <img
                    src={favorite ? iconFavoriteFill : iconFavorite}
                    onClick={dispatchFavorite}
                    className={s.favorite}
                    alt={personName}
                />
            </div>
        </>
    )
}
PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    personName : PropTypes.string,
    personId : PropTypes.string,
    favorite : PropTypes.bool,
    setFavorite : PropTypes.func,
}
export default PersonPhoto