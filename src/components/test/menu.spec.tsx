import { shallow, ShallowWrapper, render } from "enzyme";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "../menu/Menu";

const setUp = () => shallow(<Menu setLogout={() => {console.log('test')}} />);

describe("Menu component", () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = setUp();
  });
  it("should contain .menu wrapper", () => {
    const wrapper = component.find(".menu");
    expect(wrapper.length).toBe(1);
  });
  it("should render Menu component", () => {
    const component = render(<BrowserRouter><Menu setLogout={() => {console.log('test')}} /></BrowserRouter>);
    expect(component).toMatchSnapshot();
  });

});
