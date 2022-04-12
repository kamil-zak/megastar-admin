import { FC, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { IMoveDetails } from 'interfaces/common';
import { Wrapper } from './SortableElement.styles';

interface ISorableProps {
  type?: string;
  id: string;
  onHover?: (details: IMoveDetails) => void;
  onDrop?: (details: IMoveDetails) => void;
}

const Sortable: FC<ISorableProps> = ({ type = 'item', id, onHover, onDrop, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop({
    accept: type,
    hover(item: { id: string }) {
      if (item.id === id) return;
      onHover?.({ item: item.id, destination: id });
    },
    drop(item) {
      if (item.id === id) return;
      onDrop?.({ item: item.id, destination: id });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const ref = useRef(null);
  drag(drop(ref));

  return (
    <Wrapper ref={ref} visible={!isDragging} light={isOver}>
      {children}
    </Wrapper>
  );
};

export default Sortable;
