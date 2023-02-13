import { makeStyles } from "@mui/styles";



const navbarStyle = makeStyles((theme) => ({
    navbar: {
        backgroundColor: "white !important",
        boxShadow: "none !important"
    },
    navbarTitle: {
        fontWeight: "bold !important",
        fontSize: "35px !important",
        fontFamily:"cursive !important",
        marginLeft: "50px !important",
        color: "grey !important"
    },
    menuIcon:{
        fontSize:"40px !important"
    },
    menuStyle:{
        color:"black !important",
        marginRight:"40px !important",
        marginLeft:"auto !important",
    }
}))

export default navbarStyle;