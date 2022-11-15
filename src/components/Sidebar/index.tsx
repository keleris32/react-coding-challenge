import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../../config/navigation';
import styles from './Sidebar.module.scss';

import logo from '../../assets/aspaara_logo.png';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={logo} alt="Aspaara's logo" />
      </div>
      <div className={styles.list}>
        {navigationItems.sidebar.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={location.pathname === item.to ? styles.activeLink : ''}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
