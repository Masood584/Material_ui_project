import { makeStyles } from "@mui/styles";

const consultingStyles = makeStyles((theme) => ({
  parentBox: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  childBox: {
    width: "50%",
    [theme.breakpoints.down(600)]: {
      width: "90% !important",
    },
    textAlign: "center",
  },

  heading: {
    color: "black !important",
    fontWeight: "bold !important",
    // [theme.breakpoints.up("xs")]: {
    //   fontSize: "40px !important",
    // },
    [theme.breakpoints.down(600)]: {
      fontSize: "30px !important",
    },
  },

  headingPara: {
    color: "black !impoatant",
  },

  learnMoreButton: {
    padding: "15px 50px !important",
    [theme.breakpoints.down(600)]: {
      padding: "10px 25px !important",
    },
    backgroundColor: "#038cb6 !imporatant",
    borderRadius: "none !important",
    color: "white !important",
    fontSize: 16,
    "&:hover": { backgroundColor: "#038cb6 !important" },
  },
}));

export default consultingStyles;
