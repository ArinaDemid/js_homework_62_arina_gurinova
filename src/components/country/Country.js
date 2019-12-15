import React, {Component} from "react";
import './Country.css';
import axios from 'axios';

class Country extends Component {

  state = {
    loadedCountry: null,
    borders: []
  };

  componentDidUpdate() {
    const borders = [];
    
    if (this.props.name) {
      if (!this.state.loadedCountry || (this.state.loadedCountry && 
        this.state.loadedCountry[0].name !== this.props.name)) {
        axios.get('/name/' + this.props.name)
          .then(response => {
            if (response.data[0].borders.length !== 0 ) {
              response.data[0].borders.map(country => (
                axios('/alpha/' + country)
                .then(responseBorders => {
                  borders.push(responseBorders.data.name);
                  this.setState({borders});
                })
              ))
            } else {
              borders.push('This country has no bordering countries');
              this.setState({borders});
            }
            this.setState({loadedCountry: response.data});
          });
      }
    }
  }

  render() {
    if (this.state.loadedCountry) {
      return (
        <div className="Country">
          <h4 className="Country-name">{this.state.loadedCountry[0].name}</h4>
          <img className="Country-flag" src={this.state.loadedCountry[0].flag} alt="Flag"></img>
          <p className="Country-capital"><b>Capital: </b>{this.state.loadedCountry[0].capital}</p>
          <p className="Country-population"><b>Population: </b>{this.state.loadedCountry[0].population} people</p>
          <p><b>Code: </b>{this.state.loadedCountry[0].alpha2Code}</p>
          <ul className="Country-borders"> 
            <li className="Country-borders-title">Borders with: </li>
            {this.state.borders.map(country => (
                <li key={country}>{country}</li>
              ))
            }
          </ul>
        </div>
      )
    }
    return <p style={{textAlign: 'center', paddingTop: '100px', fontSize: '25px'}} 
              className="Country">
              Please select a Country!
            </p>;
  }
};

export default Country;