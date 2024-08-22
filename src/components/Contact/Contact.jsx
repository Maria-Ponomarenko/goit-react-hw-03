import clsx from "clsx";
import { HiUser, HiPhone } from "react-icons/hi2";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={clsx(css.box)}>
      <div>
        <p className={clsx(css.text)}>
          <HiUser className={clsx(css.icon)} />
          {name}
        </p>
        <p>
          <HiPhone className={clsx(css.icon)} />
          {number}
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
