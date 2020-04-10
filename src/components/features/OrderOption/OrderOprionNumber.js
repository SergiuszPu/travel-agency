import React from 'react';
import styles from './OrderOption.scss';


const OrderOptionNumber = ({currentValue, setOptionValue, filters, limits}) => (
  
  <div className={styles.number}>
    <input 
      className={styles.inputSmall} 
      type="number"
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      // value={filters.pricing.limits}
      
     
    >
    </input>
    {currentValue}
  </div>
);

export default OrderOptionNumber;