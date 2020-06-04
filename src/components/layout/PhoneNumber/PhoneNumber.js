import React from 'react';
import Icon from '../../common/Icon/Icon';
import styles from './PhoneNumber.scss';
import { formatTime } from '../../../utils/formatTime';

class PhoneNumber extends React.Component {
  constructor() {
    super();

    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  render () {
    const currentTime = new Date();
    const timeString = currentTime.toISOString().substr(11, 8);

    const description = 'Amanda 678.243.8455';
    const description2 = 'Tobias, 278.443.6443';
    const description3 = 'Helena, 167.280.3970';
    const description4 = 'The Office open at 8:00am';

    let time;

    if(timeString > '08:00:00' && timeString <= '12:00:00' ) {
      time = description;
    } else if(timeString > '12:00:00' && timeString <= '16:00:00' ) {
      time = description2;
    } else if (timeString > '16:00:00' && timeString <= '22:00:00' ) {
      time = description3;
    }else time = description4;

    return (
      <div className={styles.contact}>
        <Icon name='phone' /><span>{time}</span>

      </div>
    );
  }
}

export default PhoneNumber;