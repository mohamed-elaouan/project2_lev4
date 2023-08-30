import React from "react";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
];
const Conversation = ({ theme }) => {
  return (
    <Box component="section"
      sx={{
        display: { xs: "none", lg: "block" },
        flexGrow: "auto",position:"relative",
        width: { xs: "0px", lg: "410px" },
        pl: 1,
      }}
    >
      <Box sx={{position:"fixed",pl: 1,bgcolor: theme.palette.Asaid.main,height:"91vh"}}>
        {/* OnlineFriend */}
        <Box>
          <Typography variant="h5" my={1} color="inherit">
            Online Friends
          </Typography>
          <AvatarGroup total={26} sx={{ justifyContent: "center" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://mui.com/static/images/avatar/4.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://mui.com/static/images/avatar/5.jpg"
            />
          </AvatarGroup>
        </Box>
        {/* Lasted Photo */}
        <Box>
          <Typography variant="h5" my={1} color="inherit">
            Latest Photo
          </Typography>
          <ImageList
            gap={10}
            sx={{
              width: { sm: "290px", md: "390px" },
              mx: 1,
              height: "fit-content",
              my: 1,
            }}
            cols={3}
            //rowHeight={164}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  style={{ borderRadius: "5px" }}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        {/* Lasted Conversation */}
        <Box>
          <Typography variant="h5" my={1} color="inherit">
            Latest Conversation:
          </Typography>
          <List
            sx={{
              width: { sm: "290px", md: "370px" },
              bgcolor: theme.palette.Asaid.main,
              mx: "auto" /*, "background.paper"*/,
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="https://mui.com/static/images/avatar/3.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Conversation;
