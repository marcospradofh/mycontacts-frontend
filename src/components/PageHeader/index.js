import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import arrow from '../../assets/images/arrow.svg';

export default function PageHeader({ title }) {
  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </header>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
