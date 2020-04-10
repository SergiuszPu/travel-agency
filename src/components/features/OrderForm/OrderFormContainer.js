import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import { setOrderOption } from '../../../redux/orderRedux';
import { getOrderOptions } from '../../../redux/orderRedux';

const mapStateToProps = props => ({
  options: getOrderOptions(props),
});

const mapDispatchToProps = dispatch => ({
  setOrderOption: order => dispatch(setOrderOption(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);