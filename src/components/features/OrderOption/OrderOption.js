import React from 'react';
import styles from './OrderOption.scss';
import OrderOptionCheckboxer from './OrderOptionCheckboxer';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcon from './OrderOptionIcon';
import OrderOptionNumber from './OrderOprionNumber';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcon,
  checkboxes: OrderOptionCheckboxer,
  number: OrderOptionNumber,
};

 
const OrderOption = ({name, type, id, setOrderOption, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps}
          setOptionValue={value => setOrderOption({[id]: value})}

        />
      </div>
    );
  }
};

export default OrderOption;