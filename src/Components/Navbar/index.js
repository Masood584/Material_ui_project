import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import navbarStyle from "./style";
import DrawerCom from "./Drawer";

const Navbar = () => {

    const classes = navbarStyle()

    return (
        <>
            <AppBar className={classes.navbar} position="absolute">
                <Toolbar sx={{ height: 75 }}>
                    <Typography className={classes.navbarTitle}>
                        Logo
                    </Typography>
                    <DrawerCom/>
                </Toolbar>
            </AppBar>
        </>

    )
}

export default Navbar;