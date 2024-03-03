import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});


export const RegisterForm = () => {

    const dispatch = useDispatch();
    const nameFieldId = useId();
    const emailFieldId = useId();
    const passwordFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(register(values))
        actions.resetForm();
    }

  return (
      <div>
          <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
              <Form className={css.fieldContainer}>
                  <label className={css.label} htmlFor={nameFieldId}>Username
                      <Field
                          className={css.field}
                          type="text"
                          name="name"
                          placeholder="Name"
                          id={nameFieldId}
                      />
                      <ErrorMessage name="name" component="span" className={css.error} />
                  </label>
                  <label className={css.label} htmlFor={emailFieldId}>Email
                      <Field
                          className={css.field}
                          type="text"
                          name="email"
                          placeholder="Email"
                          id={emailFieldId}
                      />
                      <ErrorMessage name="email" component="span" className={css.error} />
                  </label>
                  <label className={css.label} htmlFor={passwordFieldId}>Password
                      <Field
                          className={css.field}
                          type="text"
                          name="password"
                          placeholder="Password"
                          id={passwordFieldId}
                      />
                      <ErrorMessage name="password" component="span" className={css.error} />
                  </label>
                  <button
                      className={css.btn}
                      type="submit">Register
                  </button>
                  
              </Form>
          </Formik>
     </div>
  )
}
