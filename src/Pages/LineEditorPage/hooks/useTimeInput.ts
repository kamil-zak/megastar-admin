import { useState, useEffect, useRef, ChangeEvent } from 'react';

const defaultValue = '00:00';

const replaceAt = (value: string, index: number, replace: string) =>
  value.substr(0, index) + replace + value.substr(index + 1);

const processTyped = (oldValue: string, newValue: string, newCursor: number) => {
  if (newValue.length === oldValue.length + 1) {
    const typed = newValue.substr(newCursor - 1, 1);
    const cursor = newCursor === 3 ? 4 : newCursor;
    const value = replaceAt(oldValue, cursor - 1, typed);
    return { value, cursor };
  }
  if (newValue.length === oldValue.length - 1) {
    const cursor = newCursor === 2 ? 1 : newCursor;
    const value = replaceAt(oldValue, cursor, defaultValue[cursor]);
    return { value, cursor };
  }
};

const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
const isValidTime = (time: string) => timeRegex.test(time);

const useTimeInput = (handleFilled: () => void, initialValue?: string) => {
  const [{ value, cursor }, setInputStatus] = useState({
    value: initialValue || defaultValue,
    cursor: 0,
  });

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.selectionEnd = cursor;
  });

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const newValue = target.value;
    const newCursor = target.selectionEnd || 0;
    const newStatus = processTyped(value, newValue, newCursor);
    if (!newStatus || !isValidTime(newStatus.value)) return setInputStatus({ value, cursor });
    setInputStatus(newStatus);
    if (newCursor >= defaultValue.length) handleFilled();
  };

  return { ref, value, onChange };
};

export default useTimeInput;
