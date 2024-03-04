import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { styled } from "@mui/system"; 
import * as Yup from "yup";
import css from "./RegisterForm.module.css";

const StyledButton = styled(Button)({
  background: "#4caf50",
  color: "#fff",
  padding: "10px 16px",
  fontSize: "16px",
  borderRadius: "4px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#358337",
  },
});

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ name: "", email: "", password: "" }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={css.fieldContainer}>
          <label className={css.label} htmlFor="name">
            Username
            <Field as={TextField} className={css.field} type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>
          <label className={css.label} htmlFor="email">
            Email
            <Field as={TextField} className={css.field} type="text" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="span" className={css.error} />
          </label>
          <label className={css.label} htmlFor="password">
            Password
            <Field as={TextField} className={css.field} type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="span" className={css.error} />
          </label>
          <StyledButton type="submit">Register</StyledButton>
        </Form>
      </Formik>
    </div>
  );
};
