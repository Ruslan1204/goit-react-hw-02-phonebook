import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css'

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        const handleDeleteContact = () => {
          onDelete(id);
        };
        return (
          <li className={css.item} key={id} >
            <p>{name}</p>
            <p>{number}</p>
            <button type="button" onClick={handleDeleteContact}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}