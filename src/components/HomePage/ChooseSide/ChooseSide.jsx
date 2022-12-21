import { useTheme, THEME_LiGHT, THEME_DARK, THEME_NEITRAL} from '@context/ThemeProvider'
import cn from 'classnames'
import PropTypes from "prop-types";
import imgLightSide from './img/light-side.jpg'
import imgDarkSide from './img/dark-side.jpg'
import imgFalconSide from './img/falcon.jpg'

import s from './ChooseSide.module.css';

//если jsx можно сразу круглые
const ChooseSideItem = ({theme, text, img, classes}) => {
    const isTheme = useTheme()
    return (
        <div
            className={cn(s.item, classes)}
             onClick={() => isTheme.change(theme)}>

            <div className={s.item__header}>{text}</div>
            <img className={s.item__img} src={img} alt={text}/>
        </div>
    )
}
ChooseSideItem.propTypes = {
    classes: PropTypes.string,
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
}


export const ChooseSide = () => {
    return (
        <div className={s.container}>
            <ChooseSideItem classes={s.item__light} theme={THEME_LiGHT} text="Light Side" img={imgLightSide}/>
            <ChooseSideItem  classes={s.item__dark} theme={THEME_DARK} text="Dark Side" img={imgDarkSide}/>
            <ChooseSideItem  classes={s.item__neitral} theme={THEME_NEITRAL} text="I am Han Solo" img={imgFalconSide}/>
        </div>
    )
}

export default ChooseSide