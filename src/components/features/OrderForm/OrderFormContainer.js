import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import getOrderOption from '../../../redux/orderRedux';

const mapStateToProps = props => ({
  options: getOrderOption(props),
});

export default connect(mapStateToProps)(OrderForm);