import Flex from 'components/Flex/Flex';
import Text from 'components/Text/Text';
import { FC } from 'react';
import { Wrapper } from './PageHeader.styles';

const PageHeader: FC<{ title: string }> = ({ children, title }) => {
  return (
    <Wrapper>
      <Text size="base" sizeMd="lg" color="accentSuperDark">
        {title}
      </Text>
      <Flex direction="row">{children}</Flex>
    </Wrapper>
  );
};

export default PageHeader;
