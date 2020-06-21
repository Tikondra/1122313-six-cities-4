import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {offers} from "../../mocks/forTest";

it(`should render App`, function () {
  const tree = renderer
    .create(
        <App
          offers={offers}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
