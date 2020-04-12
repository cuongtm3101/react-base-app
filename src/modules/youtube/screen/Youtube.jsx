import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
export const YoutubeScreen = (props) => {
  // state
  const [term, setTerm] = useState("");
  const [error, setError] = useState(false);

  // event handlers
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!term) {
      setError(true);
    } else {
      setError(false);
      console.log(term);
    }
  };

  // text field style
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: "10px",
        width: "800px",
      },
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <TextField
          onChange={(event) => setTerm(event.target.value)}
          value={term}
          id={error ? "outlined-error-helper-text" : "standard-basic"}
          label="Search here"
          error={error ? true : false}
          helperText={error ? "You cannot search a blank word" : ""}
        />
      </form>
    </div>
  );
};
