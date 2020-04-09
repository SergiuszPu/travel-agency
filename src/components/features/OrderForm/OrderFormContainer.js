import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions, setOrderOptions } from '../../../redux/orderRedux';

const mapStateToProps = props => ({
  options: getOrderOptions(props),
});

const mapDispatchToProps = dispatch => ({
  setOrderOptions: order => dispatch(setOrderOptions(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);