import { blue, cyan, deepPurple, grey, teal } from "@mui/material/colors";

const getDesigneTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    // @ts-ignore
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: teal,
          divider: teal[100],
          text: {
            primary: teal[900],
            secondary: teal[800],
          },
          FavCol: {
            main: deepPurple[700],
          },
          Asaid:{
            main: grey[300],
          },
          StylHover: {
            main: "rgba(0, 0, 0, 0.04)",
          },
          Button: {
            backgroundColor: teal,
            "&:hover": {
              backgroundColor: teal[300],
              scale: "1.05",
            },
          },
        }
      : {
          // palette values for dark mode
          primary: blue,
          divider: teal[100],
          Asaid:{
            main: "#121212",
          },
          FavCol: {
            main: cyan[600],
          },
          StylHover: {
            main: "rgba(255, 255, 255, 0.08)",
          },
        })
  }
})

export default getDesigneTokens;
