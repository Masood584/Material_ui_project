import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import SoloTeamStyle from "./style";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SoloTeam = () => {
  const classes = SoloTeamStyle();

  return (
    <>
      <Box className={classes.parentBox}>
        <Grid container spacing={9} alignItems="flex-end ">
          <Grid item md={4} sm={6} xs={12}>
            <Box>
              <Card className={classes.cardStyle}>
                <CardContent>
                  <Box className={classes.cardTitleStyle}>
                    <Typography className={classes.cardTitle} gutterBottom>
                      Solo
                    </Typography>
                    <Typography className={classes.cardTitle}>$74</Typography>
                  </Box>
                  <Typography variant="body1" mb={2}>
                    For freelancers and solo designers
                  </Typography>
                  <Box className={classes.cardDivider} mb={2}></Box>
                  <Typography variant="h4">Includes</Typography>
                  <List>
                    <ListItem>
                      <CheckCircleIcon sx={{ marginRight: "9px" }} />
                      <ListItemText primary="One editor license" />
                    </ListItem>
                    <ListItem>
                      <CheckCircleIcon sx={{ marginRight: "9px" }} />
                      <ListItemText primary="Figma design system" />
                    </ListItem>
                    <ListItem>
                      <CheckCircleIcon sx={{ marginRight: "9px" }} />
                      <ListItemText primary="Lifetime access to future" />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    variant="contained"
                    className={classes.actionButton}
                  >
                    Purchase Module
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box>
              <Card className={classes.cardStyle2ndBox}>
                <CardContent>
                  <Box className={classes.cardTitleStyle}>
                    <Typography className={classes.cardTitle} gutterBottom>
                      Team
                    </Typography>
                    <Typography className={classes.cardTitle}>$199</Typography>
                  </Box>
                  <Typography variant="body1" mb={2}>
                    For freelancers and solo designers
                  </Typography>
                  <Box className={classes.cardDivider} mb={2}></Box>
                  <Typography variant="h4">Includes</Typography>
                  <List>
                    <ListItem>
                      <CheckCircleIcon sx={{ marginRight: "9px" }} />
                      <ListItemText primary="Unlimited number of editors" />
                    </ListItem>
                    <ListItem>
                      <CheckCircleIcon sx={{ marginRight: "9px" }} />
                      <ListItemText primary="Figma design system" />
                    </ListItem>
                    <ListItem>
                      <CheckCircleIcon sx={{ marginRight: "9px" }} />
                      <ListItemText primary="Lifetime access to future" />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    variant="contained"
                    className={classes.actionButton}
                  >
                    Purchase Module
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box className={classes.soloDescriptive} textAlign="left">
              <Typography variant="body1">
                You day real less till dear read. Considered use dispatched
                melancholy sympathize discretion led. Oh feel if up to till
                like. He an thing rapid these after going drawn or. Timed she
                his law the spoil round defer. In surprise concerns informed
                betrayed he learning is ye. Ignorant formerly so ye blessing. He
                as spoke avoid given downs money on we. Of properly carriage
                shutters ye as wandered up repeated moreover.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SoloTeam;
