import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Input({ type }) {
  return (
    <input
      type={type}
      className={styles.input}
      placeholder="nome"
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
};
