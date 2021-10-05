import PropTypes from 'prop-types';
import './Button.scss';

export default function Button({
  children, type, disable, danger,
}) {
  return (
    <button
      disabled={disable}
      type={type}
      className={!danger ? 'Button' : 'Button Button__danger'}
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  disable: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  danger: PropTypes.bool,
};

Button.defaultProps = {
  disable: false,
  danger: false,
};
