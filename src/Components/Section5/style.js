import { makeStyles } from "@mui/styles";

const companyStrategy = makeStyles((theme) => ({
  strategyContent: {
    backgroundImage: "url(https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/f08d58af408b5023af12b4e4/nn.jpg)",
    padding: "120px 100px 120px 105px",
    [theme.breakpoints.down(600)]:{
      padding:"90px 30px 90px 50px"
    }

  },
  contentTitle: {
    fontWeight: "500 !important",
    [theme.breakpoints.down(370)]:{
      fontSize:"36px !important"
    }
  },
  strategyDes: {
    lineHeight: "1.8",
  },
  imgContainer:{
   height:"100% !important"
  }

}));

export default companyStrategy;
