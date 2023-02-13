import { makeStyles } from "@mui/styles";

const SoloTeamStyle=makeStyles((theme)=>({
    parentBox:{
        // marginTop:"100px",
        backgroundColor:"#1a1a1a",
        padding:"80px 60px",
        
    },
    cardStyle:{
        backgroundColor:"#555c66 !important",
        color:"white !important",
        padding:"0px 15px",
        paddingBottom:"30px",
        borderRadius:"0px !important"
    },
    cardTitle:{
        fontSize:"30px !important",
        fontWeight:"bold !important",
        fontFamily:"cursive !important"
    },
    cardTitleStyle:{
        display:"flex",
        justifyContent:"space-between",
    },
    cardDivider:{
        height:"5px",
        backgroundColor:"white",
        borderRadius:"5px"
    },
    actionButton:{
        padding:"10px 50px !important",
        margin:"5px auto !important",
        backgroundColor:"white !important",
        color:"black !important",
        textTransform:"capitalize !important"

    },
    cardStyle2ndBox:{
        backgroundColor:"#038cb6 !important",
        color:"white !important",
        padding:"0px 15px",
        paddingBottom:"30px",
        borderRadius:"0px !important"
    },
    soloDescriptive:{
    color:"white",
    display:"flex",
    }
}))

export default SoloTeamStyle;