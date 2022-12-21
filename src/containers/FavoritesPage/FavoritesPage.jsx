import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import PeopleList from "@components/PeoplePage/PeopleList";

import s from './FavoritesPage.module.css'

const FavoritesPage = () => {
    const [people, setPeople] = useState([])

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const arr = Object.entries(storeData)

        if (arr.length) {
            const res = arr.map(i => {
                return {
                    id: i[0],
                    /*name: i[1].name,
                    img: i[1].img,*/
                    ...i[1]
                }
            })
            setPeople(res)
        }
    }, [])

    return (
        <>
            <h1 className="header__text">Favorite Page</h1>
            {people.length
                ? <PeopleList people={people}/>
                : <h2 className={s.comment}>No data</h2>
            }

        </>
    )
}
export default FavoritesPage