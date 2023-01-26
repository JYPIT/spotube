import styles from './Header.module.css';
import { BsSearch, BsYoutube } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Header({ children }) {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);
  return (
    <header className={styles.nav}>
      <Link className={styles.logoLink} to='/'>
        <BsYoutube className={styles.logoIcon} />
        <h1>Spotube</h1>
      </Link>

      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type='text'
          placeholder='Search...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.searchIcon}>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
