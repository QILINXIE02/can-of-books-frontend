// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BestBooks from './components/BestBooks';
import Header from './components/Header';
import Profile from './components/Profile';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/books" element={<BestBooks />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
