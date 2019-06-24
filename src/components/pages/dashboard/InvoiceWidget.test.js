import React from "react";
import { shallow } from "enzyme";
import InvoiceWidget from "./InvoiceWidget";
import { UserConsumer } from "../../../contexts/UserProvider";

describe("Invoice Dashboard", () => {
  it("renders One <UserConsumer /> components", () => {
    const wrapper = shallow(<InvoiceWidget />);
    expect(wrapper.find(UserConsumer)).toHaveLength(1);
  });
});
