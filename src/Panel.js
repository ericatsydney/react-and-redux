import React, {Component} from 'react';
import SearchBar from './SearchBar';
import Title from './Title';
import WeatherSummary from './WeatherSummary';
import WeatherDetail from './WeatherDetail';

class Panel extends Component {
  render() {
    return (
      <div> 
        <SearchBar></SearchBar>
        <Title></Title>
        <WeatherSummary></WeatherSummary>
        <WeatherDetail></WeatherDetail>
      </div>
    );
  }
}

export default Panel;