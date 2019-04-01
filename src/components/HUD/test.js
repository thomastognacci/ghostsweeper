import React from "react";
import {shallow} from "enzyme";

import HUD from "./";

describe("<HUD />", () => {
  it("renders without crashing", () => {
    shallow(<HUD />);
  });
});
