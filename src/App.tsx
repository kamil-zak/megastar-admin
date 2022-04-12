import ConfirmModal from 'components/ConfirmModal/ConfirmModal';
import Toasts from 'components/Toasts/Toasts';
import RoutesSwitch from 'navigation/Routes';
import React from 'react';

const App = () => {
  return (
    <>
      <RoutesSwitch />
      <ConfirmModal />
      <Toasts />
    </>
  );
};

export default App;
