import s from "./App.module.css";

export const Input = ({ value, onChange }) => {
  return (
    <label>
      <input
        value={value}
        type="text"
        placeholder="Введите"
        onChange={onChange}
        className={s.input}
      />
    </label>
  );
};
