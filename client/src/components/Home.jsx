/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import React from 'react';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      view: 'home',
    };

  }

  changeView(value) {
    this.props.changeView(value)
  }

  render() {
    return (
      <div className="homeDiv">
        <button className="homeButton" value="submit" onClick={(e)=>this.changeView(e.target.value)}>Submit</button>
        <button className="homeButton" value="list" onClick={(e)=>this.changeView(e.target.value)}>Entries</button>
      </div>
    );
  }
}

export default Home;