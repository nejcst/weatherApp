import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      niz: ''
    };

    this.obSpremembiInputa = this.obSpremembiInputa.bind(this);
    this.obPotrditviForme = this.obPotrditviForme.bind(this);

  }

  obSpremembiInputa(e) {
    this.setState({niz: e.target.value})
  }

  obPotrditviForme(e) {
    e.preventDefault();

    this.props.fetchWeather(this.state.niz);
    this.setState({niz: ''});

  }

  render() {
    return (
      <form
        onSubmit={this.obPotrditviForme}
        className="input-group">
        <input
          placeholder="Vnesi mesto"
          value={this.state.niz}
          onChange={this.obSpremembiInputa}
          className="form-control"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-success">Išči</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
