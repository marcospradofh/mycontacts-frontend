import logo from '../../assets/images/logo.svg';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo MyContacts" width="201" />
    </header>
  );
}

export default Header;
