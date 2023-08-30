import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, Stack, TextField, Tooltip, useTheme } from "@mui/material";

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import {
  CalendarMonth,
  EmojiEmotions,
  InsertPhoto,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { blue, green, purple, red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {xs:"94%",sm:450},
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 3,
};
const AddNewPost = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  return (
    <Box>
      <Tooltip title="Add New ">
        <Fab
          color="primary"
          sx={{ position: "fixed", left: 16, bottom: 22 }}
          onClick={handleOpen}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              sx={{ textAlign: "center" }}
              variant="h5"
              mb={2}
              component="h5"
            >
              Create Post
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                alt="Travis Howard"
                sx={{ width: "57px", height: "50px" }}
                src="https://images.pexels.com/photos/4720385/pexels-photo-4720385.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <Typography variant="body1" ml={1} color="inherit">
                Anass El Aouan
              </Typography>
            </Box>
            <TextField
              id="standard-multiline-static"
              label="What is in your mind ..."
              multiline
              type="secondary"
              sx={{ color: theme.palette.grey[400], width: "100%", mt: 1 }}
              rows={3}
              variant="standard"
            />
            <Stack direction={"row"} my={1}>
              <EmojiEmotions
                sx={{ color: blue[500], mx: "5px", fontSize: "27px", my: 2 }}
              />
              <InsertPhoto
                sx={{ color: purple[500], mx: "5px", fontSize: "27px", my: 2 }}
              />
              <VideoCameraBack
                sx={{ color: green[500], mx: "5px", fontSize: "27px", my: 2 }}
              />
              <PersonAdd
                sx={{ color: red[500], mx: "5px", fontSize: "27px", my: 2 }}
              />
            </Stack>
            <ButtonGroup variant="contained" sx={{ width: "100%" }}>
              <Button sx={{ flexGrow: 1, bgcolor: blue[700] }}>Post</Button>
              <Button sx={{bgcolor: blue[700], px: 2 }}>
                <CalendarMonth />
              </Button>
            </ButtonGroup>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default AddNewPost;
