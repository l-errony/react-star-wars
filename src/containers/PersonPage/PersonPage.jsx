import { useParams } from 'react-router-dom';
import React, {useEffect, useState, Suspense} from "react";
import {useSelector} from "react-redux";
import { getApiResource } from "@utils/network";

import { withErrorApi} from "@hoc-helpers/withErrorApi";

import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack";
import UiLoading from "@ui/UiLoading";

import { API_PERSON } from "@constants/api";
import PropTypes from "prop-types";
import {getPeopleImage} from "@services/getPeopleData";

import s from './PersonPage.module.css'


const PersonFilms = React.lazy(() => import("@components/PersonPage/PersonFilms"))

const PersonPage = ({setErrorApi}) => {
   // const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [favorite, setFavorite] = useState(false)

    const storeData = useSelector(store => store.favoriteReducer)
    const {id} = useParams()

    useEffect(() => {
        (async () => {
           // const id = match.params.id
            const res = await getApiResource(`${API_PERSON}/${id}/`)

            storeData[id] ? setFavorite(true) : setFavorite(false)

            if (res) {
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair Color', data: res.hair_color},
                    {title: 'Skin Color', data: res.skin_color},
                    {title: 'Eye Color', data: res.eye_color},
                    {title: 'Birth Year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                ]);
                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))
                res.films.length > 0 && setPersonFilms(res.films)

                setErrorApi(false)
            }else{
                setErrorApi(true)
            }
        })()
    }, [])


    return(
        <>
            <PersonLinkBack />

            {/*<UiLoading theme="blue"
                       isShadow/>*/}

            <div className={s.wrapper}>
                <span className={s.person__name}>{personName}</span>
                <div className={s.container}>
                    <PersonPhoto personPhoto={personPhoto}
                                 personName={personName}
                                 personId={id}
                                 favorite={favorite}
                                 setFavorite={setFavorite}/>
                    {personInfo && (<PersonInfo personInfo={personInfo}/>)}

                    {personFilms && (
                        <Suspense fallback={<UiLoading />}>
                            <PersonFilms personFilms={personFilms}/>
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    )
}
PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage)