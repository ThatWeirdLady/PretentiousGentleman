import Box from '@mui/material/Box'
import React from 'react'
import BardInFall from "./images/BardInFall.jpg";
import { Typography } from '@mui/material';

const WelcomeCard = () => {
    return (
        <Box
            height={600}


            display="flex"
            alignItems="center"
            gap={4}
            p={0}
            sx={{ border: '2px solid grey', overflowY: "hidden", backgroundImage: `url(${BardInFall})`, backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: "center" }}

        >
            <Typography variant="h2" color="white" sx={{ textShadow: "4px 4px #000" }}>Welcome</Typography>
            {/* <img src={BardInFall} width="100%" /> */}
        </Box >

    )
}

export default WelcomeCard