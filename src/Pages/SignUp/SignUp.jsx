// React
import React from "react";
// Router
import { Link, useHistory } from "react-router-dom";
// validation form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// Redux
import {useDispatch} from 'react-redux';
import {onSignUp} from '../../actions';
// Components
import Form from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
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
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
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
  confirmPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
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
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (data) => {
    dispatch(onSignUp(data));
    history.push('/home')
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Input
                label="First Name"
                name="firstName"
                id="firstName"
                autoComplete="fname"
                {...register("firstName", { required: true })}
                error={!!errors.firstName}
                helperText={errors?.firstName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                label="Last Name"
                name="lastName"
                id="lastName"
                autoComplete="lname"
                {...register("lastName", { required: true })}
                error={!!errors.lastName}
                helperText={errors?.lastName?.message}
              />
            </Grid>
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
            <Grid item xs={12}>
              <Input
                label="Confirm Password"
                name="confirmPassword"
                id="confirm-password"
                type="password"
                autoComplete="current-password"
                {...register("confirmPassword", { required: true })}
                error={!!errors.confirmPassword}
                helperText={errors?.confirmPassword?.message}
              />
            </Grid>
          </Grid>

          <PrimaryButton>Sign Up</PrimaryButton>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/SignIn/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div>
    </Container>
  );
};

export default SignUp;
