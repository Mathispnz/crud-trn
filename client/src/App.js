import React, { Component } from 'react';
import AddPainting from './components/AddPainting';
import Paintings from './components/Paintings';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>Paintings</h2>

        <Paintings />

        <AddPainting />
    </div>
    )
  }
}


