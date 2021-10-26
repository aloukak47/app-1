import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

function Header() {
    return (
        <div>
           <AppBar position="static">
               <Toolbar >
                   <Typography variant="h3">EMPLOYEE DETAILS</Typography>
               </Toolbar>
               </AppBar>   
        </div>
    )
}

export default Header
