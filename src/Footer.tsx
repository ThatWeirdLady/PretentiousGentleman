import React from 'react'
import { grey } from '.'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import patreon from './images/icons8-patreon-50.png';


const Footer = () => {
    return (
        <Box sx={{ backgroundColor: grey, height: "600", width: "100%" }}>
            <BottomNavigation sx={{ width: "100%", backgroundColor: "#00000000" }}>
                <BottomNavigationAction
                    icon={<YouTubeIcon />}
                />
                <BottomNavigationAction
                    icon={<FacebookIcon />}
                />
                <BottomNavigationAction sx={{}}
                    icon={<img src={patreon} />}
                />
            </BottomNavigation>
        </Box>
    )
}

export default Footer