import { Card, CardContent, Grid, Typography, CardActions, Button } from "@mui/material";
import React from "react";
import "./style.css"

const Section2 = () => {

    const missionCard = [
        {
            id: 1,
            cardTitle: "Mission",
            cardDesc: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
            cardButton: "learn more"
        },
        {
            id: 2,
            cardTitle: "Your Strategy",
            cardDesc: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
            cardButton: "learn more"
        },
        {
            id: 3,
            cardTitle: "Guidlines",
            cardDesc: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
            cardButton: "learn more"
        },
        {
            id: 4,
            cardTitle: "consulting",
            cardDesc: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
            cardButton: "learn more"
        }
    ]

    console.log(missionCard)


    return (
        <>
            <div className="section2">
                <Grid container>
                    {missionCard.map(item => (
                        <Grid item key={item.id} lg={3} md={3} sm={6} xs={12}>
                            <Card sx={{
                                margin: 5,
                                background: "linear-gradient(#555c66, #292d33)",
                                borderRadius: "none"

                            }}>
                                <CardContent>
                                    <Typography variant="h3"
                                        sx={{
                                            color: "white",
                                            fontWeight: "bold",
                                            fontFamily: "cursive",
                                            marginTop:3
                                        }}
                                        gutterBottom>
                                        0{item.id}
                                    </Typography>
                                    <Typography variant="h5" sx={{
                                        marginBottom: 4,
                                        color: "white"
                                    }}>
                                        {item.cardTitle}
                                    </Typography>
                                    <Typography variant="body2"
                                        sx={{
                                            color: "lightGrey",
                                        }}
                                    >
                                        <em>{item.cardDesc}</em>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="large"
                                        sx={{
                                            color: "white",
                                        }}
                                    >{item.cardButton}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}


export default Section2;