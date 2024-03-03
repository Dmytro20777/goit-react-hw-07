import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useId } from "react";
import { IoPersonAdd } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
});

export const ContactForm = () => {
    const dispatch = useDispatch();
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
    };

    return (
        <div className={css.container}>
            <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
                <Form className={css.fieldContainer}>
                    <label className={css.label} htmlFor={nameFieldId}>Name
                        <Field
                            className={css.field}
                            type="text"
                            name="name"
                            placeholder="Name"
                            id={nameFieldId}
                        />
                        <ErrorMessage name="name" component="span" className={css.error} />
                    </label>
                    <label className={css.label} htmlFor={numberFieldId}>Number
                        <Field
                            className={css.field}
                            type="text"
                            name="number"
                            placeholder="Number"
                            id={numberFieldId}
                        />
                        <ErrorMessage name="number" component="span" className={css.error} />
                    </label>
                    <button className={css.btn} type="submit">Add contact <IoPersonAdd className={css.addPerson} /></button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
