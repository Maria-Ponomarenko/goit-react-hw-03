import clsx from "clsx";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={clsx(css.list)}>
      {contacts.map((contact) => {
        return (
          <li className={clsx(css.listItem)} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
