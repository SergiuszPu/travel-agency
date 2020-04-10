import React from 'react';
import styles from './OrderOption.scss';
import Icon from './../../common/Icon/Icon';
import {formatPrice} from './../../../utils/formatPrice';
import PropTypes from 'prop-types';



const OrderOptionIcon = ({values, setOptionValue, required, id}) => (
  
  <div 
    className={`${styles.icon} ${styles.iconActive}`}
    value={id}
    onClick={event => setOptionValue(event.value.id)}
  >
    {!required ? '' : (
      <div setOptionValue=''><i className="fas fa-times-circle">none</i></div>
    )}
    {values.map(value => (
      <div  key={value.id} value={value.id}>
        {value.name} ({formatPrice(value.price)})
        <Icon name={id}/>
      </div>
    ))}
    
  </div>
);

OrderOptionIcon.propTypes = {
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  currentValue: PropTypes.string,
  required: PropTypes.func,
  // id: PropTypes.string,
};

export default OrderOptionIcon;