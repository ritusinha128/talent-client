import React, {useState} from "react";
import {TextField, Button, Container, Typography, Alert} from '@mui/material';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const login = (user) => {
        setLoggedIn(true);
        setUsername(user.username);
        setUser(user);
        localStorage.setItem("user",JSON.stringify(user));
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!username || !password) {
            setError('Please enter a username and password.');
        }
        try {
            //let fullUrl = "http://localhost:8080/login";
            //let credentials = { "username": username, "password": password }
            //const response = await axios.post(fullUrl, credentials);
            // if(response.status == 200){
            //   let user = response.data;
            //   login(user);
            //   navigate("/");
            // }
          } catch (error) {
            setError(error.message);
          }
    };

    return (
        <Container maxWidth="xs" className="login-container">
            <Typography variant="h4" component="h2" gutterBottom align="center">Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    fullWidth
                    variant="outlined"
                    margin="normal" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    margin="normal" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">Register</Button>
            </form>
        </Container>
        
    )
}