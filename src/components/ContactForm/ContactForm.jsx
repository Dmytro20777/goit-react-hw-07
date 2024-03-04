import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button } from "@mui/material";
import { IoPersonAdd } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { toast } from 'react-hot-toast';
import * as Yup from "yup";
import css from "./ContactForm.module.css"

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
});

export const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
        toast.success('Contact added successfully!');
    };

    return (
        <div>
            <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
                <Form>
                    <Field
                        as={TextField}
                        fullWidth
                        label="Name"
                        name="name"
                        variant="outlined"
                        margin="normal"
                        helperText={<ErrorMessage className={css.error} name="name" component="span" />}
                    />
                    <Field
                        as={TextField}
                        fullWidth
                        label="Number"
                        name="number"
                        variant="outlined"
                        margin="normal"
                        helperText={<ErrorMessage className={css.error} name="number" component="span" />}
                    />
                    <Button variant="contained" color="primary" type="submit" startIcon={<IoPersonAdd />}>
                        Add contact
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
