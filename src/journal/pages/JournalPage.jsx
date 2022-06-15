import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        debitis non suscipit repudiandae excepturi vel optio nesciunt vero
        quisquam placeat harum ipsam voluptatem, nam labore et ipsum soluta ea
        ullam.
      </Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": {
            backgroundColor: "error.main ",
            opacity: 0.9,
          },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
      {/* nothing selected */}
      {/* noteview */}
    </JournalLayout>
  );
};
