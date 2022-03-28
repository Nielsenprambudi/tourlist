import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from "./component/layout/AppNavbar";
import Home from './screen/Home';
import Login from './screen/Login';
import { Provider } from "react-redux";
import ConfigureStore from "./store/ConfigureStore";
import './App.css';

function App() {
  const store = ConfigureStore();
  return (
    <Provider store={store.store}>
      <Router>
        <AppNavbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
