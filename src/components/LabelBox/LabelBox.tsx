import { FC } from 'react';
import Flex from 'components/Flex/Flex';
import { StyledText } from './LabelBox.styles';

interface ILabelBoxProps {
  text: string;
}

const LabelBox: FC<ILabelBoxProps> = ({ text, children }) => {
  return (
    <Flex gap={0}>
      <StyledText size="xs" color="primarySuperDark">
        {text}
      </StyledText>
      {children}
    </Flex>
  );
};

export default LabelBox;
