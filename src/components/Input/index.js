import PropTypes from 'prop-types';
import './Input.scss';

export default function Input({
  type, placeholder, value, onChange, error,
}) {
  return (
    <input
      type={type}
      className={!error ? 'Input' : 'Input Input__error'}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  error: null,
  value: null,
  onChange: () => {},
};
