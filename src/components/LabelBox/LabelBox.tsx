import { FC } from 'react';
import Flex from 'components/Flex/Flex';
import { StyledText } from './LabelBox.styles';

interface ILabelBoxProps {
  text: string;
  small?: boolean;
}

const LabelBox: FC<ILabelBoxProps> = ({ text, small, children }) => {
  return (
    <Flex gap={0}>
      <StyledText size={small ? 'xs' : 's'} color="accentSuperDark">
        {text}
      </StyledText>
      {children}
    </Flex>
  );
};

export default LabelBox;
