import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

describe('Header', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Scroll />);
    expect(wrapper).toMatchSnapshot();
  });
});