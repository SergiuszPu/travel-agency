import React from 'react';
import OrderSummery from '../OrderSummery/OrderSummery';
import {Row, Col} from 'react-flexbox-grid';

const OrderForm = ({tripCost, options}) => (
  <Row>
    <Col xs={12}>
      <OrderSummery tripCost={tripCost} options={options} />
    </Col>
  </Row>
);

export default OrderForm;