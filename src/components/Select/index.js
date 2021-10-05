import PropTypes from 'prop-types';
import './Select.scss';

export default function Select({ children, value, onChange }) {
  return (
    <select
      className="Select"
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
Select.defaultProps = {
  value: null,
  onChange: () => {},
};
