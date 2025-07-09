import React from 'react'
import LoginPage from './LoginPage';
import LogoutPage from './LogoutPage';
import { Route, Router, Routes } from 'react-router-dom';

function App() {

  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />       {/* http://localhost:3000/ */}
        <Route path="/logout" element={<LogoutPage />} /> {/* http://localhost:3000/about */}
        {/* <Route path="*" element={<NotFound />} />    */}
      </Routes>
  );
}

export default App;
