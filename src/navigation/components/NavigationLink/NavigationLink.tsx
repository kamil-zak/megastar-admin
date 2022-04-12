import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { StyledNavLink } from './NavigationLink.styles';
import Text from 'components/Text/Text';

interface INavigationLinkProps {
  icon: IconDefinition;
  text: string;
  to: string;
}

const NavigationLine = ({ icon, text, to }: INavigationLinkProps) => (
  <StyledNavLink to={to}>
    <FontAwesomeIcon icon={icon} />
    <Text size="s">{text}</Text>
  </StyledNavLink>
);

export default NavigationLine;
