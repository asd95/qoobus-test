// React
import React, { useState, useEffect } from "react";
// Router
import { Link, useHistory } from "react-router-dom";
// validation form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { onSignIn } from "../../actions";
// Components
import Form from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import AlertError from "../../Components/Alert/Alert";
// Material-UI import
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// material-ui styles
const useStyles = makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("email is a required field"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Please Enter your password"),
});

const SignUp = () => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const [signErr, setSignErr] = useState("");

  useEffect(() => {
    const seto= setTimeout(() => {
      setSignErr("");
    }, 2001);
    return ()=> seto
  }, [signErr]);


  const onSubmit = (data) => {
    if (Object.keys(state.signUp).length === 0) {
      setSignErr("You don't have an account");
      return;
    }
    if (
      data.email !== state.signUp.email ||
      data.password !== state.signUp.password
    ) {
      setSignErr("Email not found or password incorrect");
      return;
    }

    dispatch(onSignIn(data));
    history.push("/home");
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                label="Email Address"
                name="email"
                id="email"
                autoComplete="email"
                {...register("email", { required: true })}
                error={!!errors.email}
                helperText={errors?.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                label="Password"
                name="password"
                id="password"
                type="password"
                autoComplete="current-password"
                {...register("password", { required: true })}
                error={!!errors.password}
                helperText={errors?.password?.message}
              />
            </Grid>
          </Grid>
          {signErr ? <AlertError alert={signErr} /> : ""}

          <PrimaryButton>Sign In</PrimaryButton>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div>
    </Container>
  );
};

export default SignUp;
