import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { changeOfContact } from '../../redux/contacts/operations';
import { selectToken } from '../../redux/auth/authslice';
import { TextField, Button } from '@mui/material';
import css from "./ContactModal.module.css";
import { styled } from '@mui/system'; 

Modal.setAppElement('#root');

const StyledButton = styled(Button)`
    background-color: #4caf50;
    color: #fff;
    padding: 10px 16px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: auto;
    margin-top: 10px;
    
    &:hover {
        background-color: #358337;
    }
`;

export const ContactModal = ({ isOpen, closeModal, selectedContact }) => {
  const initialValues = {
    id: selectedContact ? selectedContact.id : '',
    name: selectedContact ? selectedContact.name : '',
    number: selectedContact ? selectedContact.number : '',
    };

    const dispatch = useDispatch();
    const token = useSelector(selectToken);

    const handleSaveChanges = (values) => {
    const { id, ...rest } = values;
    dispatch(changeOfContact({ ...rest, contactId: id, token }));
    closeModal();
};

  return (
    <Modal
      className={css.modalContent}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Contact Modal"
    >
      {selectedContact && (
        <div className={css.modalContainer}>
          <button className={css.closeButton} onClick={closeModal}><IoMdClose/></button>
          <Formik initialValues={initialValues} onSubmit={handleSaveChanges}>
            <Form>
              <label className={css.label} htmlFor="name">Name:</label>
              <Field as={TextField} className={css.field} type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className={css.error} />

              <label className={css.label} htmlFor="number">Number:</label>
              <Field as={TextField} className={css.field} type="text" id="number" name="number" />
              <ErrorMessage name="number" component="div" className={css.error} />

              <div className={css.buttonContainer}> 
                <StyledButton variant="contained" className={css.btn} type="submit">Save Changes</StyledButton>
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </Modal>
  );
};
