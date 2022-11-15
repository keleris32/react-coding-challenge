import { Route, Routes, Navigate } from 'react-router-dom';
import { Client, Dashboard, Overview } from '../containers';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />}>
      <Route path="/" element={<Navigate replace to="/dashboard/overview" />} />
      <Route path="/dashboard/overview" element={<Overview />} />
      <Route path="/dashboard/client" element={<Client />} />
    </Route>
  </Routes>
);

export default AppRoutes;
