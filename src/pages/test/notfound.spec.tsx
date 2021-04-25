import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import NotFound from "../NotFound";

const setUp = () => shallow(<NotFound />);

describe("should render NotFound component", () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .notFound wrapper", () => {
    const wrapper = component.find("div");
    expect(wrapper.length).toBe(1);
  });
});
