import { makeStyles } from "@mui/styles";

const contactBoxStyle = makeStyles((theme) => ({
  contactBox: {
    backgroundImage:
      'url("https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/b515a26a5fd75621b770a0ee/business-colleagues-rooftop-talking.jpg")',
    backgroundPosition: "50% 50% !important",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    padding:"0px 5px 60px !important"
  },
  contactBoxTitle: {
    color: "#2678a5",
    fontWeight: "700 !important",
    paddingTop: "70px",
    paddingBottom: "70px",
    fontSize:"1.875rem !important"
  },
  contactForm: {
    width:"878px",
    [theme.breakpoints.down(1000)]:{
      width: "80%"
    },
    backgroundColor: "whitesmoke",
    padding: "32px !important",
    margin: "0px auto !important",
  },
//   inputField: {
//     "&.css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
//         [theme.breakpoints.down(900)]:{
//           margin: "5px !important",
//     }
//     },
  inputField: {
    backgroundColor: "lightgrey !important",
    color: "black !important",
    width: "98% !important",
    border:"0px"
  },
  inputFieldMarg:{
    [theme.breakpoints.down(900)]:{
        margin:"12px 0px"
    }
  },

  submitButton: {
    padding: "16px 90px !important",
  },
  contactNumber:{
    width:"1200px",
    [theme.breakpoints.down(1200)]:{
      width:"90%"
    },
    backgroundColor:"whitesmoke",
    margin: "0px auto !important",
    marginTop:"250px !important",
  },
  contactNoStyle:{
    position:"relative",
    padding:"30px 20px",
    paddingBottom:"0px !important",
    background:"transparent !important",
    boxShadow:"none !important"
  },
  iconStyle:{
    // position:"absolute",
    // left:"20px",
    // top:"50px",
    fontSize:"40px !important",
    color:"#038cb6"
  }
}));

export default contactBoxStyle;
