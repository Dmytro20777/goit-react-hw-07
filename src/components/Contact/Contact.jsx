import { Button } from '@mui/material';
import { IoPersonOutline } from 'react-icons/io5';
import { CiPhone } from 'react-icons/ci';
import { MdOutlinePersonRemoveAlt1 } from 'react-icons/md';
import { styled } from '@mui/system'; 
import css from "./Contact.module.css";


const StyledButton = styled(Button)`
    padding: 6px 10px; 
    background-color: transparent; 
    border: none;
    color: #b45e5e;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #eb300b;
        color: #fff; 
    }
`;

export const Contact = ({ item, onDelete }) => {
    return (
        <>
            <h2 className={css.title}><IoPersonOutline className={css.iconPerson} />{item.name}</h2>
            <p className={css.description}><CiPhone className={css.iconPhone} />{item.number}</p>
            <StyledButton
                startIcon={<MdOutlinePersonRemoveAlt1 className={css.iconDelete} />}
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(item.id);
                }}
            >
                Delete
            </StyledButton>
        </>
    );
};
