import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux"
import { logIn } from "../../redux/auth/operations";
import css from './LoginForm.module.css'
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});


export const LoginForm = () => {

    const dispatch = useDispatch();
    const emailFieldId = useId();
    const passwordFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values))
        actions.resetForm();
    }

  return (
      <div>
          <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
              <Form className={css.fieldContainer}>
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
                      type="submit">Log in
                  </button>
                  
              </Form>
          </Formik>
     </div>
  )
}
