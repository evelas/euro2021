import { shallow, ShallowWrapper, render } from "enzyme";
import React from "react";
import Header from "../Header";

const setUp = () => shallow(<Header />);

describe("Header component", () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .header wrapper", () => {
    const wrapper = component.find(".header");
    expect(wrapper.length).toBe(1);
  });
  it("should render Header component", () => {
    const component = render(<Header />);
    expect(component).toMatchSnapshot();
  });
});
