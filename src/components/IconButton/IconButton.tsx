import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HTMLAttributes } from 'react';
import { Wrapper } from './IconButton.styles';

const sizeValues = {
  sm: 10,
  md: 13,
  base: 15,
  lg: 20,
};

interface IIconButtonProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconDefinition;
  size: keyof typeof sizeValues;
}

const IconButton = ({ icon, size, ...rest }: IIconButtonProps) => {
  return (
    <Wrapper size={sizeValues[size]} {...rest}>
      <FontAwesomeIcon icon={icon} />
    </Wrapper>
  );
};

export default IconButton;
