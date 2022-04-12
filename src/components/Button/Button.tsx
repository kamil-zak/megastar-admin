import { ButtonHTMLAttributes, ReactText } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import AbsoluteWrapper from 'components/AbsoluteWrapper/AbsoluteWrapper';
import { StyledButton, StyledClipLoader } from './Button.styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactText;
  icon?: IconDefinition;
  loading?: boolean;
  small?: boolean;
  danger?: boolean;
}

const Button = ({ children, icon, loading, ...rest }: IButtonProps) => (
  <StyledButton isTextVisible={!loading} {...rest}>
    {icon && (
      <>
        <FontAwesomeIcon icon={icon} />{' '}
      </>
    )}
    {children}
    {loading && (
      <AbsoluteWrapper>
        <StyledClipLoader />
      </AbsoluteWrapper>
    )}
  </StyledButton>
);
export default Button;
