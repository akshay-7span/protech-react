import React from 'react'
import LoginPage from './LoginPage';
import LogoutPage from './LogoutPage';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Home';
import { HashRouter } from 'react-router-dom';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />       {/* http://localhost:3000/ */}
        <Route path="/home" element={<Home />} />       {/* http://localhost:3000/ */}
        <Route path="/logout" element={<LogoutPage />} /> {/* http://localhost:3000/about */}
        {/* <Route path="*" element={<NotFound />} />    */}
      </Routes>
    </HashRouter>
  );
}

export default App;
