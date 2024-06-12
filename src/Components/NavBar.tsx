

import { AppBar, Box, Button, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material';
import React from 'react'
import small_logo from "../images/small_logo.jpg";

const imgSize = 64;
let paleGreen = "#C3BF6D";
const pathToFont = "./fonts/Great Vibes/GreatVibes-Regular.ttf"

const NavBar = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img src={small_logo} height={imgSize} width={imgSize} ></img>

                    </IconButton>
                    <Typography textAlign={'left'} variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: "regular" }}>
                        The Pretentious Gentleman
                    </Typography>
                    <Button color="inherit">Books</Button>
                    <Button color="inherit">Artwork</Button>
                    <Button color="inherit">Film Work</Button>
                    <Button color="inherit">About Me</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar
