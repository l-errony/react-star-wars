import {ADD_PERSON_TO_FAVOURITE, REMOVE_PERSON_FROM_FAVOURITE} from "../constants/actionTypes";

export const setPersonToFavorite = (person) => ({
    type: ADD_PERSON_TO_FAVOURITE,
    payload: person

})
export const removePersonFromFavorite = (id) => ({
    type: REMOVE_PERSON_FROM_FAVOURITE,
    payload: id
})