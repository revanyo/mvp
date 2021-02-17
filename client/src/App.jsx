/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import List from './components/List.jsx';
import Submit from './components/Submit.jsx';
import Home from './components/Home.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      view: 'home',
      listView: null,
    }

    this.changeView = this.changeView.bind(this);
    this.getEntries = this.getEntries.bind(this);

  }

  componentDidMount() {
    this.getEntries();
  }

  getEntries() {
    axios.get('${PORT}/people').then((res) => {
      this.setState({
        people: res.data,
      });
    });
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
      const view = this.state.view;

      return view === 'home' ? <Home changeView={this.changeView} />
        : view === 'submit' ? <Submit />
        : <List people={this.state.people} listView={this.state.listView} getEntries={this.getEntries}/>;
  }

  render() {
    console.log(this.state.view, 'viewState')
    return (
      <div>
        <div className="fixed-header">
          <span className="homeSpan" onClick={() => this.changeView('home')}>Philia</span>
          <span className="formSpan" onClick={() => this.changeView('submit')}>New Entry</span>
          <span className="entrySpan" onClick={() => this.changeView('list')}>Entries</span>
        </div>
        <div className="main">
          {this.renderView()}
        </div>
        <div className="fixed-footer">
          <span className="homeSpan">Copyright 2021</span>
        </div>
      </div>
    );
  }
}

export default App;