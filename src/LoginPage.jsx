import React from 'react'
import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Button } from '@mui/material';

const LoginPage = () => {

    const logoutApiCall = () => {
        window.location.href = "https://my.easa.com/Portals/_default/Skins/MXOnline/pages/SignOut.aspx?returnurl=http%3A%2F%2Flocalhost%3A3000%2Flogout?ctl=logoff"
    }


    return (
        <div className="App">

            <ToastContainer />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Welcome User!
                </p>

                <div>
                    {/* <Button variant="contained" onClick={() => loginApiCall()} style={{margin: 10}}>Login To EASA</Button> */}
                    {/* <Button variant="contained" onClick={() => logoutApiCall()} style={{ margin: 10 }}>Fetch User Details</Button> */}
                    <Button variant="contained" onClick={() => logoutApiCall()} style={{ margin: 10 }}>Logout From EASA</Button>
                    {/* <Button variant="contained" onClick={() => protechApiCall()}>Calling auth-status api</Button> */}

                </div>
            </header>
        </div>
    )
}

export default LoginPage
