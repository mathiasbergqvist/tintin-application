import React, {Component} from 'react';
import Table from './components/Table';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://c2.staticflickr.com/2/1045/1093572846_00f85c7d3f_m.jpg" className="App-logo"
               alt="logo"/>
        </div>
        <p className="App-intro">
          Bibliografi
        </p>
        <Table title="Tintin Books"/>
      </div>
    );
  }
}

export default App;
