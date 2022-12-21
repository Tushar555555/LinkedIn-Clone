import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={[<Login/>]}></Route>
          <Route path='/Home' element={[<Header/>,<Home/>]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
