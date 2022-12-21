import {useCallback, useEffect, useState} from "react";
import { debounce } from 'lodash'

import UiInput from "@components/UI/UiInput";
import {getApiResource} from "@utils/network";
import { API_SEARCH } from "@constants/api";
import { withErrorApi} from "@hoc-helpers/withErrorApi";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo";
import PropTypes from "prop-types";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";

import s from './SearchPage.module.css'


const SearchPage = ({setErrorApi}) => {
    const [inputSearch, setInputSearch] = useState('')
    const [people, setPeople] = useState([])

    const getResponse = async (value) => {
        console.log(value)
        const res = await getApiResource(API_SEARCH+value)

        if (res){
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return {
                    id,
                    name,
                    img
                }
            })
            setPeople(peopleList)
            setErrorApi(false)
        }else{
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getResponse('')
    }, [])

    const debouncedGetResponse =  useCallback(
        debounce(value => getResponse(value), 300),
        []
    )

    const handleInputChange = (value) => {
        setInputSearch(value)
        debouncedGetResponse(value)
    }
    return (
        <>
            <h1 className="header__text">Search</h1>
            <UiInput value={inputSearch}
                     handleInputChange={handleInputChange}
                     placeholder="Input characters name"
                     classes={s.input__search}
            />
            <SearchPageInfo people={people}/>
        </>
    )
}
SearchPage.propTypes = {
    setErrorApi: PropTypes.func
}
export default withErrorApi(SearchPage)