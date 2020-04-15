import React from 'react';
import styles from './OrderOption.scss';
import Icon from './../../common/Icon/Icon';
import {formatPrice} from './../../../utils/formatPrice';
import PropTypes from 'prop-types';



const OrderOptionIcon = ({values, setOptionValue, required}) => (
  
  <div 
    className={`${styles.icon} ${styles.iconActive}`}
  >
    {!required ? '' : (
      <div><i className="fas fa-times-circle">none</i></div>
    )}
    {values.map(value => (
      <div  key={value.id} value={value.id} onClick={() => setOptionValue(value.id)}>
        {value.name} ({formatPrice(value.price)})
        <Icon name={value.icon}/>
      </div>
    ))}
  </div>
);

OrderOptionIcon.propTypes = {
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  currentValue: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string,
};

export default OrderOptionIcon;