
import { Button } from "@mui/material";
import React from "react";

const ButtonCom = (props) => {

    return (
        <>
            <Button 
            variant="contained" 
            sx={{
                color: "white !important",
                backgroundColor: "#038cb6 !important",
                padding: "12px 38px 14px 37px !important",
                borderRadius: "0px !important",
                letterSpacing: "2px !important",
            }}
            >{props.title}</Button>
        </>
    )
}

ButtonCom.defaultProps = {
    title: "Learn More"
}
export default ButtonCom;
