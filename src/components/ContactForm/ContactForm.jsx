import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useId } from "react";
import { IoPersonAdd } from "react-icons/io5";

// import { nanoid } from 'nanoid';
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/operations";


const FeedbackSchema = Yup.object().shape({
  addUser: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  addNumber: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
});

const ContactForm = () => {
    const dispatch = useDispatch();
    
    const addNewContact = (newName, newNumber) => {
    dispatch(addContact({ name: newName, phone: newNumber }));
  };
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        addNewContact(values.addUser, values.addNumber);
        actions.resetForm();
    };

    return (
        <div className={css.container}>
            <Formik initialValues={{ addUser: "", addNumber: "" }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
                <Form className={css.fieldContainer}>
                    <label className={css.label} htmlFor={nameFieldId}>Name
                        <Field
                            className={css.field}
                            type="text"
                            name="addUser"
                            placeholder="Name"
                            id={nameFieldId}
                        />
                        <ErrorMessage name="addUser" component="span" className={css.error} />
                    </label>
                    <label className={css.label} htmlFor={numberFieldId}>Number
                        <Field
                            className={css.field}
                            type="text"
                            name="addNumber"
                            placeholder="Number"
                            id={numberFieldId}
                        />
                        <ErrorMessage name="addNumber" component="span" className={css.error} />
                    </label>
                    <button className={css.btn} type="submit">Add contact <IoPersonAdd className={css.addPerson} /></button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;