import AbsoluteWrapper from 'components/AbsoluteWrapper/AbsoluteWrapper';
import { StyledSyncSpinner } from './Spinner.styles';

interface ISpinnerProps {
  small?: boolean;
}

const Spinner = ({ small }: ISpinnerProps) => (
  <AbsoluteWrapper>
    <StyledSyncSpinner size={small ? '15px' : '30px'} />
  </AbsoluteWrapper>
);

export default Spinner;
