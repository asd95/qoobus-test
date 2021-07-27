import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

const Form = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <form {...props} className={styles} noValidate>
      {children}
    </form>
  );
};

export default Form;
