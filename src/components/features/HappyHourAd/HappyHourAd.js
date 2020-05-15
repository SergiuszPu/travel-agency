import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';


class HappyHourAd extends React.Component {

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
  
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }
  

  render(){
    const  { title, description } = this.props;
    return (
      <div>
        <h3 className={styles.title}> {title}</h3>
        <div className={styles.promoDescription}>{description}</div>
        <div className='promoDescription'>{this.getCountdownTime()}</div>
      </div>
    );
  }
}



export default HappyHourAd;