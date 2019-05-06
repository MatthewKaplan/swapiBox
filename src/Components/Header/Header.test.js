import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  let wrapper;

  let mockHandleClick = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Header retrieveData={mockHandleClick} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a sort by planets button", () => {
    const planetsBtn = wrapper.find("[data-test='planets-button']");
    expect(planetsBtn.length).toBe(1);
  });

  it("should render a sort by people button", () => {
    const peopleBtn = wrapper.find("[data-test='people-button']");
    expect(peopleBtn.length).toBe(1);
  });

  it("should render a sort by vehicles button", () => {
    const wrapper = shallow(<Header />);
    const vehiclesBtn = wrapper.find("[data-test='vehicles-button']");
    expect(vehiclesBtn.length).toBe(1);
  });

  it("should invoke displayAllStudios when show-all-btn is clicked", () => {
    const vehiclesBtn = wrapper.find("[data-test='vehicles-button']");
    vehiclesBtn.simulate("click");
    expect(mockHandleClick).toBeCalled();
  });

  it("should invoke displayAllStudios when show-all-btn is clicked", () => {
    const peopleBtn = wrapper.find("[data-test='people-button']");
    peopleBtn.simulate("click");
    expect(mockHandleClick).toBeCalled();
  });

  it("should invoke displayAllStudios when show-all-btn is clicked", () => {
    const planetsBtn = wrapper.find("[data-test='planets-button']");
    planetsBtn.simulate("click");
    expect(mockHandleClick).toBeCalled();
  });
});
