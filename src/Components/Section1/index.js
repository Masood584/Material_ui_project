import React from "react";
import { Grid, Typography } from "@mui/material";
import creativePageStyle from "./style";
import "./style.css";

const Section1 = () => {
  const classes = creativePageStyle();

  return (
    <>
      <div className="section1">
        <Grid container className={classes.textBox} >
          <Grid item className={classes.boxTitle} xs={12} md={6} >
            <Typography variant="h3" className={classes.set}>CREATIVE-</Typography>
            <Typography variant="h3"  className={classes.set}>THINKING FOR BUSINESSES</Typography>
          </Grid>
          <Grid item className={classes.boxPara} xs={12} md={6} >
            <Typography>
              IMPOSSIBLE IS JUST A BIG WORD THROWN AROUND BY SMALL MEN WHO FIND
              IT EASIER TO LIVE IN THE WORLD THEY’VE BEEN GIVEN, THAN TO EXPLORE
              THE POWER THEY HAVE TO CHANGE IT. IMPOSSIBLE IS NOT A FACT. IT’S
              AN OPINION.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Section1;
