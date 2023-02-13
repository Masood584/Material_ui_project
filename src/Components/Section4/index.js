import React from "react";
import { Button, Grid, Link, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import aboutCompanyStyle from "./style";

const Section4 = () => {

    const classes = aboutCompanyStyle();

    const defaultTextTheme = createTheme({
        palette: {
            primary: {
                main: "#fff"
            }
        }
    })

    return (
        <>
            <Box>
                <Grid container className={classes.aboutBox}>
                    <Grid item xs={12} md={6}>
                        <Box className={classes.imgBox}></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box className={classes.textBox}>
                            <ThemeProvider theme={defaultTextTheme}>
                                <Typography variant="h3" color="primary.main" mb={5} className={classes.aboutTitle}>
                                    About Our Company
                                </Typography>
                                <Typography variant="body1" color="primary.main" mb={4} className={classes.aboutDes}>
                                    Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Lobortis elementum nibh tellus molestie nunc non. Aliquet bibendum
                                </Typography>
                                <Typography variant="body1" color="primary.main" mb={3}>
                                    Image from 
                                    <Link 
                                    href="https://www.freepik.com/"
                                    target="_blank"
                                    ml={1}
                                    sx={{textDecoration:"underline"}}
                                     >
                                        Freepik
                                        </Link>
                                </Typography>
                                <Button variant="contained" className={classes.actionButton}>Learn More</Button>
                            </ThemeProvider>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Section4;