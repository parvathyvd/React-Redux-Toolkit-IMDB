import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Router>
      <Header></Header>
      <div className="container">
      <Routes>
        <Route path='/' exact element ={<Home/>}/>
        <Route path='/movie/:imdbID' element ={<MovieDetails/>}/>
        <Route element ={<PageNotFound/>}/>
       </Routes>
       <Footer/>
      </div>
      </Router>
</div>
  );
}

export default App;
