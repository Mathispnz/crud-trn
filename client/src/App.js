import React, { Component } from 'react';
import AddPainting from './components/AddPainting';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>Paintings</h2>

        <AddPainting />
    </div>
    )
  }
}


