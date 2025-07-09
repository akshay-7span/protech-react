import React from 'react'
import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Button } from '@mui/material';

const LoginPage = () => {

    const logoutApiCall = () => {
        window.location.href = "https://my.easa.com/Portals/_default/Skins/MXOnline/pages/SignOut.aspx?returnurl=http%3A%2F%2Flocalhost%3A3000%2Flogout?ctl=logoff"
    }

    const fetchUserDetails = () => {
        fetch('https://api--staging.testiqo.com/registered-users', {
            method: 'GET',
            // credentials: 'include',
            headers: {
                // 'Content-Type': 'text/plain',
                'authToken' : 'd5131fde-f5af-4ad9-b5e3-ca41123ccfc9'
            }
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('user_details').innerHTML = JSON.stringify(data);
                console.log('User Details:', data);
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
            });
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
                    <Button variant="contained" onClick={() => fetchUserDetails()} style={{ margin: 10 }}>Fetch User Details</Button>
                                        
                    <Button variant="contained" onClick={() => logoutApiCall()} style={{ margin: 10 }}>Logout From EASA</Button>
                    {/* <Button variant="contained" onClick={() => protechApiCall()}>Calling auth-status api</Button> */}

                </div>
            </header>
        </div>
    )
}

export default LoginPage
