import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppNavbar from "./component/layout/AppNavbar";
import Home from './screen/Home';
import Login from './screen/Login';
import Register from './screen/Register';
import Profile from './screen/Profile';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store/ConfigureStore";
import './App.css';
import http from './core/http';

function RequireAuth({ children }: { children: JSX.Element }) {
  const {dataUser} = useSelector((state: any) => state?.config);
  http.defaults.headers.common['Authorization'] = `Bearer ${dataUser.Token}`;
  let location = useLocation();

  if (!dataUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}



function App() {
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>

        <Router>
          <AppNavbar/>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/profile' element={
                <RequireAuth>
                  <Profile/>
                </RequireAuth>
              }/>
            </Routes>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
