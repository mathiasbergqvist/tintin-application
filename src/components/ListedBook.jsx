import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class ListedBook extends Component {

  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
  }

  render() {
    const {id, title, year, thumbnail} = this.props;
    if(this.state.redirect){
      return <Redirect to={`book/${id}`}/>
    }
    return (
      <tr className="item-row" onClick={() => this.handleOnClick(id)}>
        <td>
          <img src={thumbnail} alt=""/>
        </td>
        <td>
          <p>{title}</p>
        </td>
        <td>
          <p>{year}</p>
        </td>
      </tr>
    );
  }

  handleOnClick(id) {
    this.setState({
      redirect: true
    });
  }
}

export default ListedBook;
