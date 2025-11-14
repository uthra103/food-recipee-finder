import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';


import './header.css'

function Header() {


  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{
          backgroundColor: "white", color: "black"
        }}>
          <Toolbar>
            < Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              <Link to={'/'} style={{ textDecoration: 'none', color: "black" }}>
                <h2 >Dish <span>Discover</span></h2>
              </Link>
            </Typography >

            <Tooltip > <Link to={'/'}><Button  ><a href="#home">Home</a></Button></Link></Tooltip>


            <Tooltip > <Button ><a href="#menu">Menu</a></Button></Tooltip>


            <Tooltip > <Link to={'/contact'}><Button ><a href=""> AboutUs</a></Button></Link></Tooltip>




          </Toolbar>
        </AppBar>
      </Box >
    </div >

  )
}

export default Header
