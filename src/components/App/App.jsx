import { Header } from 'components';
import { Home } from 'pages';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
