import React from "react";
import { Box } from "@mui/system";
import contactBoxStyle from "./Style";
import {
  TextField,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const ContactSection = () => {
  const classes = contactBoxStyle();

  return (
    <>
      <Box className={classes.contactBox}>
        <Typography className={classes.contactBoxTitle}>
          Preparing For Your Success,
          <br />
          We Provide Truly Prominent IT Solutions.
        </Typography>
        <Box className={classes.contactForm} textAlign="center">
          <Grid container>
            <Grid Item md={4} xs={12}>
              <TextField
                label="Enter Your Name"
                className={classes.inputField}
              />
            </Grid>
            <Grid Item md={4} xs={12}>
              <Box className={classes.inputFieldMarg}>
                <TextField
                  label="Enter a valid Email address"
                  className={classes.inputField}
                />
              </Box>
            </Grid>
            <Grid Item md={4} xs={12}>
              <Button variant="contained" className={classes.submitButton}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.contactNumber}>
          <Grid container>
            <Grid item xs={12} sm={6} md={6} textAlign="left">
              <Card className={classes.contactNoStyle}>
                <Box>
                  <LocationOnIcon className={classes.iconStyle} />
                </Box>
                <CardContent>
                  <Typography variant="h4" mb={2} sx={{ fontWeight: "700" }}>
                    Our Office Location
                  </Typography>
                  <Typography variant="h6">
                    The Interior Design Studio Company
                    <br />
                    The Courtyard, ​Al Quoz 1,​ Colorado, ​ USA
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} textAlign="left">
              <Card className={classes.contactNoStyle}>
                <Box>
                  <LocalPhoneIcon className={classes.iconStyle} />
                </Box>
                <CardContent>
                  <Typography variant="h4" mb={2} sx={{ fontWeight: "700" }}>
                    Phone (Landline)
                  </Typography>
                  <Typography variant="h6">
                    + 912 3 567 8987
                    <br/>
                    + 912 5 252 3336
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ContactSection;
