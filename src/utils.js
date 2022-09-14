import { useState, useEffect } from "react";

const randomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const getString = (length) => {
  const UNICODE_a = 97;
  const UNICODE_z = 122;
  const arrayChars = [];
  for (let i = 0; i < length; i++)
    arrayChars.push(String.fromCharCode(randomInteger(UNICODE_a, UNICODE_z)));
  return arrayChars.join("");
};

export const getItems = (count, length) => {
  const arrayStrings = [];
  for (let i = 0; i < count; i++) arrayStrings.push(getString(length));
  return arrayStrings;
};

export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setIsPending(false);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return [debouncedValue, isPending];
};
