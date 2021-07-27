import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";

const Input = forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      required
      inputRef={ref}
      {...props}
    />
  );
});

export default Input;
