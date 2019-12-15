import React, {Component} from "react";
import './Countries.css';

class Countries extends Component {

  render() {
    return (
      <li className='Countries' onClick={this.props.clicked}>{this.props.name}</li>
    )
  }
};

export default Countries;