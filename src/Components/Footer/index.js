import React from "react";
import { Box } from "@mui/system";
import FooterStyle from "./style";
import { Typography } from "@mui/material";


const Footer = () => {
  const classes = FooterStyle();

  return (
    <>
      <Box className={classes.footerStyle} textAlign="center">
        <Typography variant="h6">
        Sample text. Lorem ipsum dolor sit amet, consectetur
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
