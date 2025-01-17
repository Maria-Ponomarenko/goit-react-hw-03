import clsx from "clsx";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
  return (
    <div className={clsx(css.box)}>
      <p>Find contacts by name</p>
      <input
        className={clsx(css.input)}
        type="text"
        value={value}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}
