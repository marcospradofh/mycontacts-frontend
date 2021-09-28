import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
