import logo from '../../assets/images/logo.svg';
import './styles.scss';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo MyContacts" />
      <input type="text" placeholder="Pesquisar contato..." />
    </header>
  );
}

export default Header;
