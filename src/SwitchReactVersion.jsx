import s from "./App.module.css";

export const SwitchReactVersion = () => {
  const {
    renderReact18,
    unmountReact18,
    renderReact17,
    unmountReact17,
    version,
  } = window;

  const onChange = () => {
    if (version === "17") {
      unmountReact17();
      renderReact18();
    }
    if (version === "18") {
      unmountReact18();
      renderReact17();
    }
  };

  const isVersion18 = window.version === "18" ? true : false;

  return (
    <div className={s.radio} onChange={onChange}>
      <span className={s.inputRadio}>
        <input type="radio" name="react" defaultChecked={isVersion18} />
        React 18
      </span>
      <span className={s.inputRadio}>
        <input type="radio" name="react" defaultChecked={!isVersion18} />
        React 17
      </span>
    </div>
  );
};
