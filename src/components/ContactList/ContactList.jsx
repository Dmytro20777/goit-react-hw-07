import { useDispatch, useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css"
import { visibleContacts } from "../../redux/contacts/selectors"
import { deleteContact } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(visibleContacts);

  const deleteUser = (userId) => {
    dispatch(deleteContact(userId));
  };

    
    return (
      <div>
        <ul className={css.list}>
        {contacts.length > 0 && contacts.map((item) => (
          <li key={item.id} className={css.item}>
            <Contact item={item} onDelete={deleteUser} />
          </li>
        ))}
      </ul>
    </div>
    )
}

export default ContactList