import { Box, Button, Checkbox, IconButton, MenuItem, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { teal } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { useState } from "react";

const ContentP = () => {
  const ListCard = [
    {
      lettre: "ME",
      Name: "Mohamed Elaouan",
      imgLink:
        "https://firebasestorage.googleapis.com/v0/b/pourresoudreproblem.appspot.com/o/images%2F1133687.jpg?alt=media&token=48cdbf12-cf48-4733-95d1-de5561ad7df5",
    },
    {
      lettre: "FL",
      Name: "Fati Elaouan",
      imgLink:
        "https://firebasestorage.googleapis.com/v0/b/pourresoudreproblem.appspot.com/o/images%2F174270.jpg?alt=media&token=d8487de0-0808-4b29-b349-c7cf7e1f49fd",
    },
    {
      lettre: "SS",
      Name: "Souad Elaouan",
      imgLink:
        "https://firebasestorage.googleapis.com/v0/b/pourresoudreproblem.appspot.com/o/images%2F1521051.jpg?alt=media&token=b926acae-0ca2-42fb-aad8-ee4f11ae3ff4",
    },
    {
      lettre: "Ye",
      Name: "Yahya Elaouan",
      imgLink:
        "https://firebasestorage.googleapis.com/v0/b/pourresoudreproblem.appspot.com/o/images%2F1602304.jpg?alt=media&token=717cf230-1106-4914-8946-e7a52207046b",
    },
  ];
  const theme = useTheme();
  const style = {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    height: "fit-content",
    mt: 2,
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ProMenu = (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  );
  return (
    <Box component="main" sx={style}>
      {ListCard.map((item, index) => {
        return (
          <Card
            key={index}
            sx={{ maxWidth: { xs: "97%", sm: 444 }, my: "20px" }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: teal[500],
                    color: theme.palette.getContrastText(teal[500]),
                  }}
                >
                  {item.lettre}
                </Avatar>
              }
              action={
                <IconButton
                  onClick={(eo) => {
                    handleClick(eo);
                  }}
                  aria-label="settings"
                >
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.Name}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="fit-content"
              image={item.imgLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Box sx={{ flexGrow: 1 }}>
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
                <IconButton>
                  <ShareIcon />
                </IconButton>
              </Box>
              <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
            </CardActions>
          </Card>
        );
      })}
      {ProMenu}
    </Box>
  );
};

export default ContentP;
