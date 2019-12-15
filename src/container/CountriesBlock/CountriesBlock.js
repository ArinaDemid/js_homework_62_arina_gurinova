import React, {Component} from 'react';
import Countries from '../../components/countries/Countries';
import Country from '../../components/country/Country';
import axios from 'axios';

class CountriesBlock extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      selectedCountry: null
    };
  }

  async componentDidMount() {
    this.getCountries();
  }

  async getCountries() {

    const response = await axios('/');
    if (response.status === 200) {
      const countries = response.data;
      this.setState({countries});
    }
  }

  countrySelectedHandler = name => {
    this.setState({selectedCountry: name});
  };

  render() {
    return (
      <div className='CountriesAllInfo'>
        <Country 
          name={this.state.selectedCountry}
        />
        <div className='CountriesList'>
          {this.state.countries.map(country => (
            <Countries
              key={country.name}
              name={country.name}
              clicked={() => this.countrySelectedHandler(country.name)}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default CountriesBlock;