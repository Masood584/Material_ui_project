import React from "react";
import Home from "./Components/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const App = () => {
  const theme = createTheme({
    // breakpoints: {
    //   values: {
    //     xs: 600,
    //     sm: 960,
    //     md: 1280,
    //     lg: 1600,
    //     xl: 1900,
    //   },
    // },
    typography: {
      fontFamily: [
        "Lato",
        "sans-serif",
        // '"Apple Color Emoji"',
        // '"Segoe UI Emoji"',
        // '"Segoe UI Symbol"',
      ].join(","),
    },
    button: {
      fontFamily: ["Lato", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
