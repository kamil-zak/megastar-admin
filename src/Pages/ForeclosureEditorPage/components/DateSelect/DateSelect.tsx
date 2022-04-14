import Select from 'components/Select/Select';
import { IDate } from 'interfaces/common';
import { ChangeEvent, useEffect } from 'react';
import arrayRange from 'utils/arrayRange';
import { isValidDate, getMonthName } from 'utils/format';
import { StyledSelect, Wrapper } from './DateSelect.styles';

const months = arrayRange(0, 11);
const days = arrayRange(1, 31);

interface IDateSelectProps {
  date: IDate;
  onChange: (date: IDate) => void;
}

const DateSelect = ({ date: { day, month }, onChange }: IDateSelectProps) => {
  const handleDayChange = (e: ChangeEvent<HTMLSelectElement>) => onChange({ day: Number(e.target.value), month });
  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => onChange({ day, month: Number(e.target.value) });

  const availableMonths = months.filter((month) => isValidDate({ month, day }));

  useEffect(() => {
    if (!isValidDate({ day, month })) onChange({ day, month: -1 });
  }, [day, month, onChange]);

  return (
    <Wrapper>
      <Select onChange={handleDayChange} value={day}>
        <option value={-1}>Dzień</option>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </Select>
      <StyledSelect onChange={handleMonthChange} value={month} disabled={day < 0}>
        <option>Miesiąc</option>
        {availableMonths.map((month) => (
          <option key={month} value={month}>
            {getMonthName(month)}
          </option>
        ))}
      </StyledSelect>
    </Wrapper>
  );
};

export default DateSelect;
