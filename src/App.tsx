import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import AppNavbar from "./component/layout/AppNavbar";
import Home from './screen/Home';
import Login from './screen/Login';
import Register from './screen/Register';
import Profile from './screen/Profile';
import { Provider } from "react-redux";
import ConfigureStore from "./store/ConfigureStore";
import './App.css';

function RequireAuth({ children }: { children: JSX.Element }) {
  const store = ConfigureStore();
  const redx : any = store.store.getState().config;
  let location = useLocation();

  if (!redx.isLogin) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}



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
            <Route path='/register' element={<Register/>}/>
            <Route path='/profile' element={
              <RequireAuth>
                <Profile/>
              </RequireAuth>
            }/>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
