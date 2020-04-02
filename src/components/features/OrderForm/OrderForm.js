import React from 'react';
import OrderSummery from '../OrderSummery/OrderSummery';
import {Row, Col} from 'react-flexbox-grid';

const OrderForm = (cost, options) => (
  <Row>
    <Col xs={12}>
      <OrderSummery tripCost={cost, options} />
    </Col>
  </Row>
);

export default OrderForm;