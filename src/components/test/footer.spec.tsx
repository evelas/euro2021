import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import Footer from "../Footer";

const setUp = () => shallow(<Footer />);

describe("should render Footer component", () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .footer wrapper", () => {
    const wrapper = component.find(".footer");
    expect(wrapper.length).toBe(1);
  });
});
