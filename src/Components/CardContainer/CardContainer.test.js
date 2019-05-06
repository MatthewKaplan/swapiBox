import React from 'react';
import { shallow } from 'enzyme';
import { mockCleanPerson } from '../utils/mockData';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CardContainer cardsToBeRendered={mockCleanPerson}/>);
    expect(wrapper).toMatchSnapshot();
  });
});