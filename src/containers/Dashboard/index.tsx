import { Outlet, useLocation } from 'react-router-dom';
import { navigationItems } from '../../config/navigation';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const location = useLocation();

  const currentPathObj = navigationItems.sidebar.find(
    (item) => location.pathname === item.to
  );

  return (
    <div className={styles.container}>
      <header>
        <h1>{currentPathObj ? currentPathObj.name : ''}</h1>
      </header>
      <Outlet />
    </div>
  );
};

export default Dashboard;
