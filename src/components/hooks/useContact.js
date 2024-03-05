import { useSelector } from "react-redux"
import { selectContacts, selectFilter } from "../../redux/contacts/selectors"


export const useContact = () => {
    const contact = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    return {
        contact,
        filter
    };
};