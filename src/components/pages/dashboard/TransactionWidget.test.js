import React from "react";
import { shallow } from "enzyme";
import TransactionWidget from "./TransactionWidget";
import { UserConsumer } from "../../../contexts/UserProvider";

describe("Transaction Dashboard", () => {
  it("renders One <UserConsumer /> components", () => {
    const wrapper = shallow(<TransactionWidget />);
    expect(wrapper.find(UserConsumer)).toHaveLength(1);
  });
});
