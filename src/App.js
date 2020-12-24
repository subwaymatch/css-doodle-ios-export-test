import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DoodleUnitEm from "./DoodleUnitEm";
import DoodleUnitPx from "./DoodleUnitPx";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/doodle-unit-em">Using em</Link>
            </li>

            <li>
              <Link to="/doodle-unit-px">Using px</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <Switch>
          <Route path="/doodle-unit-em">
            <DoodleUnitEm />
          </Route>

          <Route path="/doodle-unit-px">
            <DoodleUnitPx />
          </Route>

          <Route path="/">
            <h1>CSS-Doodle Export Test</h1>
            <p>
              Exporting &lt;css-doodle&gt; on an iOS device will work when using{" "}
              <code>em</code> for <code>@size</code>.
            </p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
