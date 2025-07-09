import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { FETCH_USER_DETAILS, LOCALHOST_DEFAULT_PAGE_URL } from './Constant';


const Home = () => {
    const location = useLocation();
    // Extract query params
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("Token");
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);


    useEffect(() => {
        if (token) {
            // Store the token in localStorage or state management
            localStorage.setItem('authToken', token);
            fetchUserDetails();
            console.log("Token received:", token);
        } else {
            console.log("No token found in URL");
            setIsAuthenticated(false);
        }
    }, [token]);


    const fetchUserDetails = () => {
        document.getElementById('user_details').innerHTML = "Fetching user details...";
        fetch(FETCH_USER_DETAILS, {
            method: 'GET',
            // credentials: 'include',
            headers: {
                // 'Content-Type': 'text/plain',
                'authToken': token
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('User Details:', data);
                setIsAuthenticated(true);
                document.getElementById('user_details').innerHTML = JSON.stringify(data);
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
                setIsAuthenticated(false);
                document.getElementById('user_details').innerHTML = "401 (Unauthorized)";
            });
    }


    const logoutApiCall = () => {

        window.location.href = "https://my.easa.com/Portals/_default/Skins/MXOnline/pages/SignOut.aspx?returnurl="
            + encodeURIComponent(LOCALHOST_DEFAULT_PAGE_URL + "?ctl=logoff");

    }


    return (

        <div>
            <div className="App">

                <header className="App-header">
                    <div id="user_details" style={{ fontSize: '15px' }}></div>

                    <br />
                    <br />
                    <p>
                        {isAuthenticated ? `You are authenticated!!` : `You are not authenticated!!`}
                    </p>

                    <div>
                        {/* {
                            isAuthenticated &&
                            <Button variant="contained" onClick={() => fetchUserDetails()} style={{ margin: 10 }}>Fetch User Details</Button>
                        } */}

                        {
                            isAuthenticated &&
                            <Button variant="contained" onClick={() => logoutApiCall()} style={{ margin: 10 }}>Logout</Button>
                        }

                    </div>
                </header>
            </div>
        </div>

    )
}

export default Home
