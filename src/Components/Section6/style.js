import { makeStyles } from "@mui/styles";


const itDevelopmentStyle = makeStyles((theme) => ({
    contentHeading: {
[theme.breakpoints.down(600)]:{
    fontSize:"40px !important"
}
    },

    developmentContent: {
        padding: "130px 0px 130px 30px",
        [theme.breakpoints.down(900)]: {
            padding: "130px 0px 130px 130px",
        },
        [theme.breakpoints.down(600)]: {
            padding: "130px 0px 130px 40px",
        }
    },
    arrowicon: {
        color: "white !important",
        fontSize: "30px !important"
    }
}))

export default itDevelopmentStyle;