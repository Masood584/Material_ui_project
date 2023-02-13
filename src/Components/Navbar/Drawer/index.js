import React, { useState } from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import navbarStyle from "../style";


const DrawerCom = () => {

    const [openDrawer, SetOpenDrawer] = useState(false);
    const classes=navbarStyle()

    return (
        <>
            <Drawer open={openDrawer} onClose={() => SetOpenDrawer(false)}>
                <List>
                    <ListItemButton sx={{ margin:5}}>
                        <ListItemIcon>
                            <ListItemText sx={{color:"Black"}}>
                                Home
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton className={classes.menuStyle} aria-label="menu" onClick={() => SetOpenDrawer(!openDrawer)}>
                <MenuIcon className={classes.menuIcon}
                //  sx={{
                //     fontSize:35,
                //  }}
                />
            </IconButton>
        </>
    )
}

export default DrawerCom;