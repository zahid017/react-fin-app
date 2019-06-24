import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./dashboard";
import StatusWidget from "./StatusWidget";

describe("Test Dashboard", () => {
  it("renders One <StatusWidget /> components", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(StatusWidget)).toHaveLength(1);
  });
});
