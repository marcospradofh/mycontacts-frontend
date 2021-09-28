import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Button({ children, type, disable }) {
  return (
    <button
      disabled={disable}
      type={type}
      className={styles.button}
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  disable: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};
