import css from "./Contact.module.css";
import { IoPersonOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";

export const Contact = ({ item,  onDelete }) => {
    return (
        <>
            <h2 className={css.title}><IoPersonOutline className={css.iconPerson} />{item.name}</h2>
                <p className={css.discription}><CiPhone className={css.iconPhone} />{item.phone}</p>
            <button
                className={css.btn}
                onClick={() => onDelete(item.id)}>
                Delete
                <MdOutlinePersonRemoveAlt1 className={css.iconDelete} />
            </button>
        </>
    )
}