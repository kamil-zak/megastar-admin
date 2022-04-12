import { useAppSelector } from 'store/store';
import { ChangeEvent, useRef, useState } from 'react';

const useForeclosuresInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const ref = useRef<HTMLInputElement>(null);
  const foreclosures = useAppSelector((store) => store.foreclosures);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!foreclosures) return null;
    const typedChars = new Set(target.value.toUpperCase().split(''));
    const filteredChars = Array.from(typedChars).filter((char) =>
      foreclosures.some((foreclosure) => foreclosure.symbol === char),
    );
    setValue(filteredChars.join(''));
  };

  return { value, onChange, ref };
};

export default useForeclosuresInput;
