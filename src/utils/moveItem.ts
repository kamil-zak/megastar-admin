import { IMoveDetails } from '../interfaces/common';

const moveItem = <T extends { _id: string }>(items: T[], { item, destination }: IMoveDetails) => {
  const itemIndex = items.findIndex((x) => x._id === item);
  const destinationIndex = items.findIndex((x) => x._id === destination);
  const newArray = [...items];
  const [movedItem] = newArray.splice(itemIndex, 1);
  newArray.splice(destinationIndex, 0, movedItem);
  return newArray;
};

export default moveItem;
