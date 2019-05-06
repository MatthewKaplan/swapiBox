import React from 'react';
import { shallow } from 'enzyme';
import { mockCleanPerson } from '../utils/mockData';
import Cards from './Cards';

describe('Cards', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Cards />);
    expect(wrapper).toMatchSnapshot();
  });
});