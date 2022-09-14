import { useEffect, useState } from "react";
import { getItems } from "./utils";

export const Items = ({ value, isPending, listParams }) => {
  const [items, setItems] = useState([""]);
  const { numberLines, numberChars } = listParams;

  useEffect(() => {
    setItems(getItems(numberLines, numberChars));
  }, [value, numberLines, numberChars]);

  if (isPending) return <div>Loading...</div>;
  return (
    <div>
      {items.map((elem) => (
        <div key={elem}>{elem}</div>
      ))}
    </div>
  );
};
