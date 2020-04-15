import React from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';



class OrderOptionDate extends React.Component {
    state = {
      startDate: new Date(),
    };
   
    handleChange = date => {
      this.setState({
        startDate: date,
      });
    };
   
    render() {
      return (
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      );
    }
}

export default OrderOptionDate;