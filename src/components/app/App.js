import React, {Component} from 'react';
import Table from '../table/Table';
import './App.css';
import {connect} from 'react-redux'
import {fetchBooksIfNeeded} from '../../actions/actions';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {isFetching, books} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://c2.staticflickr.com/2/1045/1093572846_00f85c7d3f_m.jpg" className="App-logo"
               alt="logo"/>
        </div>
        <p className="App-intro">
          Bibliografi
        </p>
        {this.getTable()}
      </div>
    );
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchBooksIfNeeded());
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.booksData !== prevProps.booksData()) {
  //     const { dispatch } = this.props;
  //     dispatch(fetchBooksIfNeeded());
  //   }
  // }

  getTable() {
    const {isFetching, books} = this.props.booksData;
    if (isFetching) {
      return (
        <h2>Laddar innehåll...</h2>
      );
    } else if (!isFetching && books.length === 0) {
      return (
        <h2>Det finns inga böcker i databasen</h2>
      )
    } else if (books.length > 0) {
      return (
        <Table books={books}/>
      );
    } else {
      <h2>Oönskat innehåll...</h2>
    }
  }
}

const mapStateToProps = (state) => {

  return {
    booksData: state.booksData
  }

  // const {
  //   isFetching,
  //   didInvalidate,
  //   books } = state.booksData || {
  //   isFetching: true,
  //   didInvalidate: false,
  //   books: []
  // };
  //
  // return {
  //   isFetching,
  //   didInvalidate,
  //   books
  // }
};

export default connect(mapStateToProps)(App);

