import ContactList from "../components/ContactList/ContactList"
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations"
import { selectContacts } from "../redux/contacts/selectors";



const Сontacts = () => {

    const dispatch = useDispatch();
  const { loading, error } = useSelector(selectContacts);

    useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
    
  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto"}}>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <ContactForm/>
        <SearchBox />
          {loading && <p>Loading...</p>}
          {error && <p>Error</p>}
        <ContactList/>
      </div>
  )
}

export default Сontacts