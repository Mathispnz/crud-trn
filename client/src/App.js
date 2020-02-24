import React, { Component } from 'react';
import AddPainting from './components/AddPainting';
import Paintings from './components/Paintings';
import PaintingDetails from './components/PaintingDetails';
import AddPaintingHooks from './components/AddPaintingHooks';
import Carousel from './components/Carousel';
import { Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/paintings">Paintings</Link>
          <Link to="/carousel">Carousel</Link>
          <Link to="/addpaintings">Add painting</Link>
          <Link to="/addpaintingshooks">Add painting hooks</Link>
        </nav>

        <Switch>
          <Route path="/paintings" component={Paintings} />
          <Route path="/carousel" component={Carousel} />
          <Route path="/addpaintings" component={AddPainting} />
          <Route path="/addpaintingshooks" component={AddPaintingHooks} />
          <Route path="/:id" component={PaintingDetails} />
        </Switch>
    </div>
    )
  }
}


