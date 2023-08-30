import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Stack,
  Divider,
} from "@mui/material";
import { useMemo, useState } from "react";
import getDesignTokens from "../Styles/Themes";
import Header from "MuiComponent/Header";
import AsaidList from "MuiComponent/AsaidList";
import ContentP from "MuiComponent/ContentP";
import Conversation from "MuiComponent/Conversation";
import AddNewPost from "MuiComponent/AddNewPost";
const Root = () => {
  //Code darkMode
  const [mode, setMode] = useState(
    localStorage.getItem("CurrentMode") == null
      ? "light"
      : localStorage.getItem("CurrentMode") === "dark"
      ? "dark"
      : "light"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [MenuToggle, setMenuToggle] = useState("none");

  return (
    <div className={`${theme.palette.mode}`}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header setMenuToggle={setMenuToggle} MenuToggle={MenuToggle} />

        <Stack
          height={"fit-content"}
          divider={<Divider orientation="vertical" flexItem />}
          direction={"row"}
        >
          {/* BarAssaid */}
          <AsaidList {...{setMode,theme,MenuToggle}}  />

          {/* Posts */}
          <ContentP></ContentP>

          {/* Conversation */}
          <Conversation {...{theme}} />

          <AddNewPost />
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default Root;
// {
//   /* <Button
//               variant="contained"
//               onClick={() => {
//                 localStorage.setItem(
//                   "CurrentMode",
//                   theme.palette.mode === "dark" ? "light" : "dark"
//                 );
//                 setMode(theme.palette.mode === "dark" ? "light" : "dark");
//               }}
//             >
//               Changa Theme
//             </Button> */
// }
