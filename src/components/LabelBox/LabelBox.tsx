import { FC } from 'react';
import Flex from 'components/Flex/Flex';
import Text from 'components/Text/Text';

interface ILabelBoxProps {
  text: string;
  small?: boolean;
}

const LabelBox: FC<ILabelBoxProps> = ({ text, small, children }) => {
  return (
    <Flex gap={0}>
      <Text size={small ? 'xs' : 's'} color="accentSuperDark">
        {text}
      </Text>
      {children}
    </Flex>
  );
};

export default LabelBox;
