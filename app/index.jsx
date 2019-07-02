import { render } from 'react-dom';
import {App} from "./App";
import React from "react";
import {Provider} from "mobx-react";
import {store} from "./store";

render(<Provider {...store}><App/></Provider>, document.getElementById('root'));