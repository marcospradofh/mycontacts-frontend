import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import arrow from '../../assets/images/arrow.svg';
import trash from '../../assets/images/trash.svg';
import edit from '../../assets/images/edit.svg';

export default function Home() {
  return (
    <div className={styles.container}>

      <input className={styles.input} type="text" placeholder="Pesquisar contato..." />
      <header className={styles.header}>
        <strong>2 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </header>

      <div className={styles.wrapper}>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <div className={styles.card}>
          <div className={styles.info}>
            <div className={styles.contactName}>
              <strong>Mateus Silva</strong>
              <small>instagram</small>
            </div>
            <span>mateus@email.com</span>
            <span>(11) 99999-9999</span>
          </div>
          <div className={styles.actions}>
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
