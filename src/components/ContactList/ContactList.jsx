import { useDispatch, useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css"
import { useEffect } from "react";
import { selectContacts, selectFilter, visibleContacts } from "../../redux/selectors";
import { deleteContact, fetchContacts } from "../../redux/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  // const visibleContacts = items.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const contacts = useSelector(visibleContacts);


  const deleteUser = (userId) => {
    dispatch(deleteContact(userId));
  };

    
    return (
      <div>
        <ul className={css.list}>
        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}
        {contacts.map((item) => (
          <li key={item.id} className={css.item}>
            <Contact item={item} onDelete={deleteUser} />
          </li>
        ))}
      </ul>
    </div>
    )
}

export default ContactList