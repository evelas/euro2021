import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import Header from "../Header";

const setUp = () => shallow(<Header />);

describe("should render Header component", () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .header wrapper", () => {
    const wrapper = component.find(".header");
    expect(wrapper.length).toBe(1);
  });
});
