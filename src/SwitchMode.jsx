import s from "./App.module.css";

export const SwitchMode = ({ setMode }) => {
  return (
    <div className={s.radio} onChange={(e) => setMode(e.target.value)}>
      <span className={s.inputRadio}>
        <input type="radio" name="mode" value="" defaultChecked />
        Default
      </span>
      <span className={s.inputRadio}>
        <input type="radio" name="mode" value="debounce" />
        Debounce
      </span>
      <span className={s.inputRadio}>
        <input type="radio" name="mode" value="differed" />
        Differed
      </span>
      <span className={s.inputRadio}>
        <input type="radio" name="mode" value="transition" />
        Transition
      </span>
    </div>
  );
};
