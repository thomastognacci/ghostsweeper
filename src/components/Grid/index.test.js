import React from "react";
import {shallow} from "enzyme";
import renderer from "react-test-renderer";

import Grid from "./";

describe("<Grid />", () => {
  it("renders without crashing", () => {
    shallow(<Grid />);
  });
  it("renders a correct 5*5 grid", () => {
    const rendered = renderer.create(<Grid rows={5} cols={5} />);

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
