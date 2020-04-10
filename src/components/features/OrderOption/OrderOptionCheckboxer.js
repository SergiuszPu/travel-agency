import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from './../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionCheckboxer = ({values, id, setOptionValue, currentValue}) => (
  
  <div className={styles.checkboxes}>
    <label >
      <input 
        type="checkbox"
        value={id}
        onChange={event => setOptionValue(event.value.id)}
        // checked={filters.currentValue.indexOf(currentValue) == id}

      >
        {/* {values.map(value => (
          <label key={id} value={value.id}>{value.name} ({formatPrice(value.price)})</label>
        ))} */}
      </input>
    </label>
  </div>
);

OrderOptionCheckboxer.propTypes = {
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  
};

export default OrderOptionCheckboxer;