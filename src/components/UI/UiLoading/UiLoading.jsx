import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import cn from 'classnames'

import loaderWhite from './img/loader-white.svg'
import loaderBlue from './img/loader-blue.svg'
import loaderBlack from './img/loader-black.svg'

import s from './UiLoading.module.css'

const UiLoading = ({theme="blue",
                       isShadow=true,
                       classes}) => {
    const [loaderIcon, setLoaderIcon] = useState(null)

    useEffect(() => {
        switch (theme) {
            case "white": setLoaderIcon(loaderWhite); break
            case "blue": setLoaderIcon(loaderBlue); break
            case "black": setLoaderIcon(loaderBlack); break
            default: setLoaderIcon(loaderBlue)

        }
    }, [])

    return(
        <img className={cn(s.loader, isShadow && s.shadow, classes)}
             src={loaderIcon}
             alt="loader">
        </img>
    )
 }
UiLoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string
}


export default UiLoading