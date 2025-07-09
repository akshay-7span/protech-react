import React from 'react'
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Button } from '@mui/material';
import { LOCALHOST_DEFAULT_HOME_URL } from './Constant';

const LoginPage = () => {

    const loginApiCall = () => {
        window.location.href = 'https://my.easa.com/Security/Sign-In?returnurl='+encodeURIComponent(LOCALHOST_DEFAULT_HOME_URL);
    }

    return (
        <div className="App">

            <ToastContainer />
            <header className="App-header">

                <div>
                    <Button variant="contained" onClick={() => loginApiCall()} style={{margin: 10}}>Login To EASA</Button>
                </div>
            </header>
        </div>
    )
}

export default LoginPage
