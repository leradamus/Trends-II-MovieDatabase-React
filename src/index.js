import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.module.css'
import Home from './views/home'
import Movies from './views/movies'
import SelectedMovieSerie from './views/selected-movie-serie'
import TvShows from './views/tv-shows'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Home} path="/" />
        <Route exact component={Movies} path="/movies" />
        <Route
          exact
          component={SelectedMovieSerie}
          path="/movie/:id"
        />
        <Route exact component={TvShows} path="/tv-shows" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
