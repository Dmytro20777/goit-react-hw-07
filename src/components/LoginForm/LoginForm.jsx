import { Button, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import * as Yup from 'yup';
import css from "./LoginForm.module.css"

const FeedbackSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const LoginForm = () => {
    const dispatch = useDispatch();
    const emailFieldId = useId();
    const passwordFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
    };

    return (
        <div>
            <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
                <Form className={css.fieldContainer}>
                    <div className={css.inputWrapper}>
                        <Field
                            id={emailFieldId}
                            name="email"
                            as={TextField}
                            label="Email"
                            placeholder="Email"
                            className={css.field}
                        />
                        <ErrorMessage name="email" component="span" className={css.error} />
                    </div>
                    <div className={css.inputWrapper}>
                        <Field
                            id={passwordFieldId}
                            name="password"
                            type="password"
                            as={TextField}
                            label="Password"
                            placeholder="Password"
                            className={css.field}
                        />
                        <ErrorMessage name="password" component="span" className={css.error} />
                    </div>
                    <Button type="submit" variant="contained" className={css.btn}>
                        Log in
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};
