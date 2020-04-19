import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from './../../../utils/formatPrice';
import PropTypes from 'prop-types';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxer = ({values, setOptionValue, currentValue}) => (
  
  <div className={styles.checkboxes}>
    {values.map(value => (
      <label key={value.id} value={value.id}>
        <input 
          type="checkbox"
          value={value.id}
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}/> 
        {value.name} {formatPrice(value.price)}
      </label>
    ))}
  </div>
);

OrderOptionCheckboxer.propTypes = {
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  id: PropTypes.string,
  currentValue: PropTypes.array,
  
};

export default OrderOptionCheckboxer;