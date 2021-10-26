import { Button, TextField } from '@material-ui/core'
import React from 'react'

const Login = () => {
    return (
        <div>

        <TextField 
        label="Enter Name"
        fullWidth
        margin="normal"
        variant="filled"
        />

    
       <TextField 
        fullWidth
        label="Enter Address"
        margin="normal"
        variant="filled"
        />
        <TextField 
        fullWidth
        label="Enter Pincode"
        margin="normal"
        variant="filled"
        />
        <TextField 
        fullWidth
        label="Enter Mobile Number"
        margin="normal"
        variant="filled"
        />
        <TextField 
        fullWidth
        label="Enter Email Id"
        margin="normal"
        variant="filled"
        />
        <TextField 
        fullWidth
        label="Enter Password"
        margin="normal"
        variant="filled"
        type="password"
        />
        <TextField 
        fullWidth
        label="Confirm Password"
        margin="normal"
        variant="filled"
        type="password"
        />
       

        <Button
        color="primary"
        fullWidth
        variant="contained"


         >SUBMIT
               
        </Button>

        </div>
    )
}

export default Login
