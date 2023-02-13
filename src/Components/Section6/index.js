import React from "react";
import { Box, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import itDevelopmentStyle from "./style";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ButtonCom from "../Button";

const Section6 = () => {

    const classes = itDevelopmentStyle()

    const defaultTextTheme = createTheme({
        palette: {
            primary: {
                main: "#ffffff"
            }
        }
    })

    return (
        <>
            <Box sx={{ backgroundColor: "black" }}>
                <Grid container>
                    <Grid item xs={12} md={6.5}>
                        <Box sx={{height:"100%"}}>
                            <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/f5c1ceaa1e5653819912855b/jjj.jpg" height="100%" width="100%"/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5.5}>
                        <Box className={classes.developmentContent}>
                            <ThemeProvider theme={defaultTextTheme}>
                                <Typography variant="h3" mb={5} color="primary.main" className={classes.contentHeading}>
                                    IT Solution Strategy Development
                                </Typography>
                                <Typography variant="body1" color="primary.main" mb={3}>
                                    Image from
                                    <Link
                                        href="https://www.freepik.com/"
                                        target="_blank"
                                        ml={1}
                                        sx={{ textDecoration: "underline" }}
                                    >
                                        Freepik
                                    </Link>
                                </Typography>
                                <List sx={{marginBottom:"30px !important"}}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PlayArrowIcon className={classes.arrowicon} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Duis aute irure dolor"
                                            color="primary.main"
                                            sx={{ color: "white !important" }} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemIcon>
                                            <PlayArrowIcon className={classes.arrowicon} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Ut enim ad minim"
                                            color="primary.main"
                                            sx={{ color: "white !important" }} />
                                    </ListItem>
                                </List>
                                <ButtonCom/>
                            </ThemeProvider>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Section6;