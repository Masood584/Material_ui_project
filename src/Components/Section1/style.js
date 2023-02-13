import { makeStyles } from "@mui/styles";

const creativePageStyle = makeStyles((theme) => ({
  textBox: {
    marginBottom: "50px !important",
    [theme.breakpoints.down(900)]:{
        marginBottom: "5px !important",
    },
    padding: "0px 50px !important",
  },
  boxTitle: {
    color: "white",
    // border:"1px solid white",
    textAlign: "center",
    fontWeight: "bold !important",
    // [theme.breakpoints.down(600)]:{
    // "$.MuiTypography-root":{
    //     fontSize:"28px !important"
    // },
    // [theme.breakpoints.down(400)]:{
    //   fontSize:"35px !important",
    //   marginBottom:"5px !important"
    // }
  },
  set:{
    [theme.breakpoints.down(400)]:{
      fontSize:"35px !important",
      marginBottom:"5px !important"
    }
  },
  boxPara:{
    color: "white",
    // border:"1px solid white",
    textAlign: "left",
    padding: "10px 90px",
    [theme.breakpoints.down(600)]:{
        padding: "10px 0px !important",
        fontSize:"15px !important"
    }
  }
}));

export default creativePageStyle;
