import { ChangeEvent, useState } from 'react';
import UInput from '../UInput/UInput';
import styles from './Layout.module.scss';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_container + ' container'}>
          <div className={styles.logo}>
            <Link to="/">AniQuick</Link>
          </div>
          <div className={styles.search}>
            <UInput
              value={search}
              handleSearch={handleSearch}
              placeholder="Поиск"
              type="text"
            />
          </div>
          <div className={styles.menu}>
            <Link to="/anime/1">Аниме</Link>
            <Link to="/anounces">Анонсы</Link>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footer_container + ' container'}>
          <div className={styles.footer_content}>
            <span>
              <Link to="/">AniQuick</Link>
            </span>
            <span>
              <Link to="/anime/1">Аниме</Link>
            </span>
            <span>
              <Link to="/anounces">Анонсы</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
