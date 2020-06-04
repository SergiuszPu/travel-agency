export const formatTime = (seconds) => {
  if( seconds == null || isNaN(seconds) || seconds < 0 ) {
    return null;
  } 
  
  else {
    const hours = Math.floor(seconds / (60 * 60));
    seconds %= (60 * 60);
  
    const min = Math.floor(seconds / 60);
    const sec = (seconds % 60);
  
    return `${hours >= 10 ? hours : `0${hours}`}:${min >= 10 ? min : `0${min}`}:${sec >= 10 ? sec : `0${sec}`}`;
  }
};

