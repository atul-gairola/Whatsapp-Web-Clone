import React, { useState } from "react";
import { makeStyles, IconButton } from "@material-ui/core";

import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";

import TextInput from "./TextInput";

const useStyles = makeStyles({
  footer: {
    background: "#ededed",
  },
  container: {
    padding: "5px 10px",
    borderLeft: "1px solid rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    maxWidth: "100%",
    maxHeight: 62,
  },
  initialButtonContainer: {
    // padding: "5px 10px",
    // marginRight: "-10px",
    flex: "none",
    minHeight: 52,
    display: "flex",
    color: "#919191",
    "& .MuiIconButton-root": {
      padding: "5px",
      marginLeft: "5px",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  messageInputContainer: {
    marginRight: "20px",
    flexGrow: 1,
  },
  lastButtonContainer: {
    display: "flex",
    flex: "none",
    marginRight: 10,
    minHeight: 52,
    "& .MuiIconButton-root": {
      padding: "5px",
      marginLeft: "5px",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
});

function ChatboxFooter() {
  const [isInputInFocus, setIsInputInFocus] = useState(true);

  const handleOnFocus = () => {
    setIsInputInFocus(true);
  };

  const handleOnBlur = () => {
    setIsInputInFocus(false);
  };

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.initialButtonContainer}>
          <IconButton>
            <InsertEmoticonIcon style={{ fontSize: 24, color: "#919191" }} />
          </IconButton>
          <IconButton>
            <AttachFileIcon
              style={{
                fontSize: 24,
                color: "#919191",
                transform: "rotate(45deg)",
              }}
            />
          </IconButton>
        </div>
        <div className={classes.messageInputContainer}>
          <TextInput
            handleOnBlur={handleOnBlur}
            handleOnFocus={handleOnFocus}
          />
        </div>
        <div className={classes.lastButtonContainer}>
          <IconButton>
            {isInputInFocus ? (
              <SendIcon style={{ fontSize: 24, color: "#919191" }} />
            ) : (
              <MicIcon style={{ fontSize: 24, color: "#919191" }} />
            )}
          </IconButton>
        </div>
      </div>
    </footer>
  );
}

export default ChatboxFooter;
