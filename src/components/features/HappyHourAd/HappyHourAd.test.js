import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  description: '.promoDescription',
};

const mockProps = {
  title: 'title',
  description: 'pomoDescription',
};

describe('Component HappyHourAd', () => {
  
  it('should rendered without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render heading and description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.description)).toEqual(true);
  });

  it('should rendered title and promoDescription correct', () => {
    const component = shallow(<HappyHourAd {...mockProps}/>);
    expect(component).toBeTruthy();
  });
});


const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {//?? zeby zadziałało agrs musze stworzyc stała obiekt args u góry?
    if(args.length){
      super(...args);
    } else {
      super(customDate);//??? dlaczego customDate po tym jak została usunieta stala
    }
    return this;//??? jak mam rozumiec caly ten warunek
  }
  static now(){
    return (new Date(customDate)).getTime();//???????????????
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);//?? skaad jest pobierany cas ?
  
    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.description).at(1).text();

    expect(renderedTime).toEqual(expectedDescription);
  
    global.Date = trueDate;
  });
};

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
    const component = shallow(<HappyHourAd {...mockProps} />);

    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());
    jest.advanceTimersByTime(delaySeconds * 1000);

    const renderedTime = component.find(select.description).at(1).text();

    expect(renderedTime).toEqual(expectedDescription);
  
    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});

describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('11:57:58', 2, '120');
  checkDescriptionAfterTime('11:59:58', 1, '1');
  checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
});

describe('Component HappyHourAdd with mocked Date', () => {
  checkDescriptionAtTime('12:59:59', mockProps.description);
  checkDescriptionAtTime('12:00:00', mockProps.description);
});

describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('11:59:59', 1, mockProps.description );
  checkDescriptionAfterTime('12:59:59', 23 * 60 * 60 + '');//????????????????
});
