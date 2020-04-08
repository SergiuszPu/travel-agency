import React from 'react';
import OrderSummery from '../OrderSummery/OrderSummery';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';


const OrderForm = ({tripCost, options}) => (
  <Row>
    <Col md={4}>
      {pricing.map(type => (
        <OrderOption key={type.id} {...type} />
      ))}
    </Col>
    <Col xs={12}>
      <OrderSummery tripCost={tripCost} options={options} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;