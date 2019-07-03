import "@babel/polyfill"
import {City} from "./City";
import {Item} from "./Item";
import React from "react";

const App = () => (
  <div>
    <h1>React-select</h1>
    <div className="flex-row">
      <Item/>
      <City/>
    </div>
  </div>
)

export {App}
