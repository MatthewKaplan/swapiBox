import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';



describe("App", () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
      );
    });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({
        cardsToRender: [],
        isLoading: false,
        randomMovie: {}
      });
    });
});