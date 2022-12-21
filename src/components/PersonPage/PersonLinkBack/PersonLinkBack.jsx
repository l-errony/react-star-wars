import {useNavigate} from "react-router-dom";
import iconBack from './img/back.svg'

import s from './PersonLinkBack.module.css'


const PersonLinkBack = () => {
    const navigate = useNavigate()

    const handleGoBack = e => {
        e.preventDefault()
        navigate(-1)
    }
    return (
        <a href="#"
            onClick={handleGoBack}
            className={s.link}>
            <img className={s.link__img} src={iconBack} alt="icon back"/>
            <span>Go back</span>
        </a>
    )
}

export default PersonLinkBack