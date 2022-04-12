import { useAppSelector } from 'store/store';
import { Navigate, Outlet, useLocation } from 'react-router';
import { StyledContent, StyledSidebar } from './ProtectedPanel.styles';
import ROUTES from 'constants/routes';

const ProtectedPanel = () => {
  const { pathname } = useLocation();
  const user = useAppSelector((state) => state.auth.user);
  if (!user) {
    return <Navigate to={ROUTES.login} state={{ pathname }} />;
  }
  return (
    <>
      <StyledSidebar />
      <StyledContent>
        <Outlet />
      </StyledContent>
    </>
  );
};

export default ProtectedPanel;
