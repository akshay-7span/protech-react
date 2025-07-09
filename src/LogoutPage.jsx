import { Button } from '@mui/material';
import React from 'react'
import { ToastContainer } from 'react-toastify'
import logo from './logo.svg';

const LogoutPage = () => {

    const loginApiCall = () => {
        window.location.href = 'https://my.easa.com/Security/Sign-In?returnurl=https%3A%2F%2Fdemo-app-oc4ai.ondigitalocean.app%2F';
    }


    return (
        <div>
            <div className="App">

                <ToastContainer />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        You Logged Out Successfully!!!
                    </p>

                    <div>
                        <Button variant="contained" onClick={() => loginApiCall()} style={{ margin: 10 }}>Login To EASA</Button>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default LogoutPage
