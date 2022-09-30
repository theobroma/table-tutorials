// https://stackoverflow.com/questions/69928061/struggling-with-typescript-react-eslint-and-simple-arrow-functions-components
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TableView } from '@mui/icons-material';

// import MainView from '../@views/MainView';
import { AppLayout } from './AppLayout';

export const AppContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* <Route index element={<MainView />} /> */}
          <Route index element={<TableView />} />

          {/* <Route path="cryptocurrencies" element={<MainView />} /> */}
          {/* <Route path="exchanges" element={<div>exchanges</div>} /> */}
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
