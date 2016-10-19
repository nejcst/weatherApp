import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class VremeList extends Component {

  renderVreme(mesto) {

    console.log(mesto)

    const name = mesto.city.name;
    const temps = _.map(mesto.list.map((weather) => weather.main.temp), (temp) => temp - 272.15);
    const pressure = mesto.list.map((weather) => weather.main.pressure);
    const humidity = mesto.list.map((weather) => weather.main.humidity);
    const windspeed = _.map(mesto.list.map((weather) => weather.wind.speed), (speed) => speed * 3.6);
    const clouds = mesto.list.map((weather) => weather.clouds.all);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} enota="°C" color="orange" /></td>
        <td><Chart data={pressure} enota="hPa" color="blue" /></td>
        <td><Chart data={humidity} enota="%" color="green" /></td>
        <td><Chart data={windspeed} enota="km/h" color="red" /></td>
        <td><Chart data={clouds} enota="%" color="black" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={tdStyle}>Mesto</th>
            <th style={tdStyle}>Temperatura (°C)</th>
            <th style={tdStyle}>Pritisk (hPa)</th>
            <th style={tdStyle}>Vlažnost (%)</th>
            <th style={tdStyle}>Hitrost vetra (km/h)</th>
            <th style={tdStyle}>Oblačnost (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderVreme)}
        </tbody>
      </table>
    );
  }
}

let tdStyle = {
  width: 185
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(VremeList);
