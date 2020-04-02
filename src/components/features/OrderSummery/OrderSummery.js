import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';


const OrderSummary = (state, price ) => (

  <h2 className={styles.component}>
      Total {calculateTotal(formatPrice(price)), state.options}
  </h2>
);

export default OrderSummary;