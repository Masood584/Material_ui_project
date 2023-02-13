import { makeStyles } from "@mui/styles";

const aboutCompanyStyle=makeStyles((theme)=>({
aboutBox:{
    backgroundColor:"black !important",
    padding:"90px 0px !important "
},
imgBox:{
    height:"474px",
    width:"474px",
    [theme.breakpoints.down(600)]:{
        width:"320px",
        height:"320px",
    },
    [theme.breakpoints.down(320)]:{
        width:"300px",
        height:"300px",
    },
    backgroundImage:"url(https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/af3da5f0a6e2510f966a2b2b/jj.jpg)",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    borderRadius:"50%",
    margin:"0 auto !important"

},
textBox:{
    padding:"70px 200px 0px 25px",
    [theme.breakpoints.down(900)]:{
        padding:"70px 70px 1px 150px"
    },
    [theme.breakpoints.down(600)]:{
        padding:"70px 20px 2px 61px"
    }
},
aboutTitle:{
  [theme.breakpoints.down(600)]:{
    fontSize:"2.5rem !important"
  }
},

aboutTDes:{
   lineHeight:"1.6 !important",
   fontSize:"1rem !important"
},

actionButton:{
    color:"white !important",
    backgroundColor:"#038cb6 !important",
    padding:"12px 38px 14px 37px !important",
    borderRadius:"0px !important",
    letterSpacing:"2px !important"
}
}))

export default aboutCompanyStyle;