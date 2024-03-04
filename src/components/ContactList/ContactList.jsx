import { useDispatch, useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css"
import { visibleContacts } from "../../redux/contacts/selectors"
import { deleteContact } from "../../redux/contacts/operations";
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";
import { useState } from "react";
import { toast } from 'react-hot-toast';

const ContactList = ({ openModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(visibleContacts);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const deleteUser = (userId) => {
    setContactToDelete(userId);
    setIsConfirmationModalOpen(true);
  };

  const confirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete));
      setIsConfirmationModalOpen(false);
      setContactToDelete(null);
      toast.success('Contact deleted successfully!');
    }
  };

  const closeModal = () => {
    setIsConfirmationModalOpen(false);
    setContactToDelete(null);
  };

  return (
    <div>
      <ul className={css.list}>
        {contacts.length > 0 &&
          contacts.map((item) => (
            <li key={item.id} className={css.item} onClick={() => openModal(item)}>
              <Contact item={item} onDelete={() => deleteUser(item.id)} />
            </li>
          ))}
      </ul>
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        closeModal={closeModal}
        confirmDelete={confirmDelete}
      />
    </div>
  );
};

export default ContactList;