import PropTypes from "prop-types";
import cn from 'classnames'

import icon from './img/cancel.svg'
import s from './UiInput.module.css'
import '../index.css'


const UiInput = ({value, handleInputChange, classes, placeholder}) => (
    <div className={cn(s.wrapper__input, classes)}>
        <input type="text"
               value={value}
               onChange={(e) => handleInputChange(e.target.value)}
               placeholder={placeholder}
               className={s.input}/>
        <img onClick={() => handleInputChange('')}
             src={icon}
             className={cn(s.clear, !value && s.clear__disabled)} alt="clear"
        />
    </div>
)
UiInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string
}
export default UiInput

