import React, { useState } from 'react';
import InputTextMessage from './TextField/InputTextField.jsx'
import './TextField/TextField.css'
import { Container, Typography, Box } from '@mui/material'
import Buttons from './Button/button.jsx'
import "../App.css"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function SignIn(params) {
  const navigate = useNavigate()
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Tombol ditekan");
  }


  return <Container maxWidth="sm">
  <Box sx={{
    marginTop: 8,
    // display: "flex",
    // alignItems: "center",
    // flexDirection: "column",
  }}
  component="form"
  onSubmit={handleSubmit}
  >
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
    <InputTextMessage 
      id="email"
      label="Email or Phone Number"
      variant="outlined"
      fullWidth
      required
      margin="normal"
      autoFocus
      name="email"
      type="text"
    />
    <InputTextMessage 
      id="password"
      label="Password"
      variant="outlined"
      fullWidth
      required
      margin="normal"
      name="password"
      type={isShowPassword ? "text" : "password"}
    />
    <span className="optionsform forgot">Forgot Password</span>
    <div style={{ display: "flex", width: "100%", position: "relative"}}>
      <Buttons 
        type="submit"
        variant="contained"
        fullWidth
        label="Sign In"
      />
      <div style={{ position:"absolute", right: 15, bottom: 110, cursor: "pointer"}} onClick={() => setIsShowPassword(!isShowPassword)}>
      {isShowPassword ? (
        <VisibilityOff fontSize="small" />
        ) : (
        <Visibility fontSize="small" />
        )}
      </div>
    </div>
    <p className="havent">Don’t have Account? <span className="optionsform signup" onClick={() => navigate('/regist')} style={{cursor:"pointer"}}>Sign Up</span></p>
  </Box>
  </Container>
}

export default SignIn;