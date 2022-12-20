import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={[<Login/>]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
