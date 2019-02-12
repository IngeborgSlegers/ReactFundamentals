import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponent from '../concepts/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules';
import JSXCompiler from '../concepts/JSXCompiler';
import ClassComponentDemo from '../concepts/ClassComponentDemo';

const Sidebar = () => (
  <div className="sidebar">
    <div className="side-list-styling">
    <ul className="sidebar-list list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rationale">Rationale</Link></li>
        <li><Link to="/functionalcomponent">Functional Component</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/jsxrules">JSX Rules</Link></li>
        <li><Link to="/classcomponent">Class Components</Link></li>
      </ul>
    </div>
    <div className="sidebar-route">
      <Switch>
        <Route exact path="/home"><Home/></Route>
        <Route exact path="/resources"><Resources/></Route>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/functionalcomponent"><FunctionalComponent/></Route>
        <Route exact path="/jsxrules"><JSXRules /></Route>
        <Route exact path="/classcomponent"><ClassComponentDemo /></Route>
      </Switch>
    </div>
  </div>
)

export default Sidebar;