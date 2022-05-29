import { ButtonHTMLAttributes, ReactText } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { StyledButton } from './Button.styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactText;
  icon?: IconDefinition;
  loading?: boolean;
  danger?: boolean;
  bordered?: boolean;
}

const Button = ({ children, icon, loading, ...rest }: IButtonProps) => (
  <StyledButton spinner={loading} {...rest}>
    {icon && (
      <>
        <FontAwesomeIcon icon={icon} />{' '}
      </>
    )}
    {children}
  </StyledButton>
);
export default Button;
