import React, {Component} from 'react';
import Table from './components/table/Table';
import './App.css';
import {loadBooks} from "./lib/dbService";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

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
        <Table books={this.state.books}/>
      </div>
    );
  }

  componentDidMount() {
    loadBooks()
      .then(books => {
        this.setState({
          books
        });
      })
      .catch(e => {
        throw new Error(`Error from loadBooks: ${e}`)
      });
  }
}

export default App;
