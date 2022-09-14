import React, { useTransition, useState, useDeferredValue } from "react";
import { Input } from "./Input";
import { SwitchMode } from "./SwitchMode";
import { Items } from "./Items";
import { useDebounce } from "./utils";
import { SwitchControlled } from "./SwitchControlled";
import { SwitchReactVersion } from "./SwitchReactVersion";
import s from "./App.module.css";

const useParams = (mode) => {
  const [value, setValue] = useState("");
  const [valueDebounce, isPendingDebuonce] = useDebounce(value);
  const differedValue = useDeferredValue(value);
  const [isPendingTransition, startTransition] = useTransition();
  const onChange = (e) => setValue(e.target.value);

  switch (mode) {
    case "debounce":
      return {
        inputValue: value,
        itemValue: valueDebounce,
        isPending: isPendingDebuonce,
        onChange: onChange,
      };
    case "differed":
      return {
        inputValue: value,
        itemValue: differedValue,
        isPending: false,
        onChange: onChange,
      };
    case "transition": {
      const onChangeTransition = (e) =>
        startTransition(() => setValue(e.target.value));
      return {
        inputValue: value,
        itemValue: value,
        isPending: isPendingTransition,
        onChange: onChangeTransition,
      };
    }
    default:
      return {
        inputValue: value,
        itemValue: value,
        isPending: false,
        onChange: onChange,
      };
  }
};

const listParams = {
  numberLines: 5000,
  numberChars: 50,
};

const App = () => {
  const [mode, setMode] = useState("");
  const { inputValue, itemValue, isPending, onChange } = useParams(mode);
  const { version, isControlledInput } = window;
  const { numberLines, numberChars } = listParams;
  const isVersion18 = version === "18" ? true : false;

  return (
    <div className={s.app}>
      <div>
        <b>
          Генерация списка из {numberLines} строк длиной {numberChars} символов
          при вводе
        </b>
      </div>
      <Input
        value={isControlledInput ? inputValue : undefined}
        onChange={onChange}
      />
      <SwitchReactVersion />
      <SwitchControlled />
      {isVersion18 && <SwitchMode setMode={setMode} />}
      <hr className={s.hr} />
      <Items value={itemValue} isPending={isPending} listParams={listParams} />
    </div>
  );
};

export default App;
