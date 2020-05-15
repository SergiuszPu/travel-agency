import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct html link', () => {
    const id = 'abc';
    const component = shallow(<TripSummary id={id} />);
    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(`/trip/${id}`);
    console.log(component.debug());
  });

  it('should <img> to have correct src and alt', () => {
    const id = 'abc';
    const expectedSrc = 'image';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary id={id} image={expectedSrc} name={expectedAlt} />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render without crashing', () => {
    const id = 'abc';
    const days = 3;
    const cost = '123';
    const component = shallow(<TripSummary id={id}  days={days} cost={cost}/>);
    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should generate tags', () => {
    const id = 'abc';
    const tags = ['tags0', 'tags1'];
    const wrapper = shallow(<TripSummary id={id} tags={tags} />);
    const component = wrapper.find('.tags');// dlaczego np nie moze byc tu tags.find('span')?? po className szukac??
    const spans = component.find('span');

    expect(spans.length).toEqual(tags.length);
    expect(spans.at(0).text()).toEqual(tags[0]);
    expect(spans.at(1).text()).toEqual(tags[1]);
  });

  it('should not render tags element', () => {
    const id ='abc';
    const tags = [];
    const wrapper = shallow(<TripSummary id={id} tags={tags} />);

    expect(wrapper.contains('tags')).toEqual(false);
  });
  
});