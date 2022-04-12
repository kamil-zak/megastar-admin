import { faImages } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button/Button';
import Text from 'components/Text/Text';
import { useUpload } from 'providers/uploadProvider';
import { ChangeEvent, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { HoverText, VisibilityWrapper, Wrapper } from './UploadArea.styles';

const UploadArea = () => {
  const ref = useRef<HTMLInputElement>(null);
  const chooseFiles = () => ref.current?.click();

  const { addToUpload } = useUpload();

  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    addToUpload(files);
  };

  const [{ count }, drop] = useDrop(() => ({
    accept: [NativeTypes.FILE],
    drop(item: { files: File[] }) {
      addToUpload(item.files);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    canDrop(item: any) {
      const arr = Array.from(item.items) as { type: string }[];
      return arr.every((item) => item.type === 'image/jpeg');
    },
    collect: (monitor) => {
      const item = monitor.canDrop() && monitor.isOver() && monitor.getItem();
      const count = item ? item.items.length : 0;
      return {
        count,
      };
    },
  }));

  return (
    <Wrapper ref={drop} hover={!!count}>
      <FontAwesomeIcon icon={faImages} size="5x" />
      <VisibilityWrapper hidden={count}>
        <Text color="primaryDark" size="s" center>
          Przeciągnij i upuść zdjęcia tutaj
        </Text>
        <Text color="primaryDark" size="xs">
          lub
        </Text>
        <Button onClick={chooseFiles}>Wybierz...</Button>
      </VisibilityWrapper>
      {!!count && <HoverText>Liczba zdjęć: {count}</HoverText>}
      <input
        ref={ref}
        style={{ display: 'none' }}
        type="file"
        onChange={handleChange}
        accept="image/png,image/jpeg"
        multiple
      />
    </Wrapper>
  );
};

export default UploadArea;
