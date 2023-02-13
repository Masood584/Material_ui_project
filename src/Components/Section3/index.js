import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import consultingStyles from "./style";

import React from "react";

const Section3 = () => {

    const classes = consultingStyles()
    return (
        <>
            <Box className={classes.parentBox} >
                <Box className={classes.childBox}>
                    <Typography variant="h2" className={classes.heading} mb={5} >
                        Quality Consulting
                    </Typography>
                    <Typography variant="h6" className={classes.headingPara} mb={5}>
                        Our experts know how to solve your company’s issues. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Typography>
                    <Button className={classes.learnMoreButton} variant="contained">
                        Learn More
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Section3;