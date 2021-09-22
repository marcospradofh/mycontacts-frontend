import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Select({ children }) {
  return (
    <select
      className={styles.input}
    >
      {children}
    </select>
  );
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
};
