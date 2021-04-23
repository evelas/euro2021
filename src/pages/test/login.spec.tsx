import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import Login from "../Login";
import { Provider } from 'react-redux';
import createAppStore from '../../redux/redux-store';
const { store } = createAppStore();
const setUp = () => shallow(<Provider  store={store}><Login/></Provider>);

describe("should render Login component", () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .login wrapper", () => {
    const wrapper = component.find("main");
    expect(wrapper.length).toBe(0);
  });
});
