import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/component_chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const height = 120;
    const width = 180;

    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);

    return (
      <tr key={name}>
        <td>
          {name}
        </td>
        <td>
          <Chart
            width={width}
            height={height}
            data={temps}
            units="K"
            color={"blue"}/>
        </td>
        <td>
          <Chart
            width={width}
            height={height}
            data={humidities}
            units="%"
            color={"purple"}/>
        </td>
        <td>
          <Chart
            width={width}
            height={height}
            data={pressures}
            units="hPa"
            color={"red"}/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
