import s from "./App.module.css";

export const SwitchControlled = () => {
  const { isControlledInput } = window;
  const onChange = () => {
    window.isControlledInput = !isControlledInput;
  };
  return (
    <div className={s.radio} onChange={onChange}>
      <span className={s.inputRadio}>
        <input
          type="radio"
          name="controlled"
          defaultChecked={isControlledInput}
        />
        Контроллируемый инпут
      </span>
      <span className={s.inputRadio}>
        <input
          type="radio"
          name="controlled"
          defaultChecked={!isControlledInput}
        />
        Неконтроллируемый инпут
      </span>
    </div>
  );
};
