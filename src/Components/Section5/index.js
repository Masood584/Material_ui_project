import React from "react";
import { Button, Grid, Link, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from "@mui/system";
import companyStrategy from "./style";
import ButtonCom from "../Button";

const Section5 = () => {
  const classes = companyStrategy();

  const defaultTextTheme = createTheme({
    palette: {
      primary: {
        main: "#000000"
      }
    }
  })

  return (
    <>
      <Box sx={{
        backgroundImage:"url(https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/f08d58af408b5023af12b4e4/nn.jpg)"
      }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box className={classes.strategyContent}>
              <ThemeProvider theme={defaultTextTheme}>
                <Typography variant="h3" color="primary.main" mb={5} className={classes.contentTitle}>
                  IT Strategy and Transformation
                </Typography>
                <Typography variant="body1" color="primary.main" className={classes.strategyDes} mb={4}>
                  Vivamus arcu felis bibendum ut tristique et. Habitant morbi tristique senectus et netus et malesuada fames. Sapien eget mi proin sed libero enim sed.
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
                <ButtonCom/>
              </ThemeProvider>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.imgContainer}>
               <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/40dd7122b9ea5a8198a67a94/hhhh.jpg" height="100%" width="100%" alt="picture of two person"/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Section5;
