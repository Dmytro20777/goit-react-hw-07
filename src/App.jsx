import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

export const App = () => {
  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto"}}>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </div>
  );
};