import React, { Component } from 'react';

import SearchBar from '../containers/searchBar';
import VremeList from '../containers/vremeList';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <VremeList />
      </div>
    );
  }
}
