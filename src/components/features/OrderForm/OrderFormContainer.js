import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions } from '../../../redux/orderRedux';

const mapStateToProps = props => ({
  options: getOrderOptions(props),
});

export default connect(mapStateToProps)(OrderForm);