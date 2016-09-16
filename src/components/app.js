import React, { Component } from 'react';

import SearchBar from '../containers/container_search_bar';
import WeatherList from '../containers/container_weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
