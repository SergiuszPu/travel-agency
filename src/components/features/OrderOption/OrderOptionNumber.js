import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';



const OrderOptionNumber = ({currentValue, setOptionValue, limits}) => (
  
  <div className={styles.number}>
    <input 
      className={styles.inputSmall} 
      type="number"
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
    {currentValue}
  </div>

  
);

OrderOptionNumber.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.number,
  limits: PropTypes.object,
};


export default OrderOptionNumber;