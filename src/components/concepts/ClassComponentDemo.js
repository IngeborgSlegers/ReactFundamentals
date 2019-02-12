import React from 'react';
// import FaIconPack from 'react-icons/lib/fa'
import {FaThumbsUp} from 'react-icons/fa';
import {FaThumbsDown} from 'react-icons/fa';

export default class ClassComponentDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcount: 0,
      downcount: 0
    }
  }

  incrementCount = () => {
    console.log("increment called")
    this.setState({ upcount: this.state.upcount +1 })
  }

  decrementCount = () => {
    console.log("decrement called")
    this.setState({ downcount: this.state.downcount -1 })
  }

  render() {
    console.log("render called")
    return (
      <div className="main">
        <div className="maindiv">
          <ClassComponentNotes />
          <hr />
          <h3>SMASH THAT BUTTON</h3>
          <button onClick={this.incrementCount}><FaThumbsUp/> {this.state.upcount}</button>
          <button onClick={this.decrementCount}><FaThumbsDown/> {this.state.downcount}</button>
        </div>
      </div>
    )
  }
}

const ClassComponentNotes = () => {
  return (
    <div>
      <h1>Class Components</h1>
      <br/>
      <p>Class components are considered the 'React Way' of writing components.</p>
      <br/>
      <dl>
        <dt>ES6 JS Classes</dt>
        <dd>Built on these, must understand them.</dd>
        <dt>Must extend Component</dt>
        <dd>Class Components need to extend the React Component.</dd>
        <dt>render()</dt>
        <dd>Class Components must always have a render method.</dd>
        <dt>Export</dt>
        <dd>Only one class component </dd>
      </dl>
    </div>
  )
}