import { useDispatch, useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css"
import { useEffect } from "react";
import { selectContacts, visibleContacts } from "../../redux/selectors";
import { deleteContact, fetchContacts } from "../../redux/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const contacts = useSelector(visibleContacts);

  const deleteUser = (userId) => {
    dispatch(deleteContact(userId));
  };

    
    return (
      <div>
        <ul className={css.list}>
        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}
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