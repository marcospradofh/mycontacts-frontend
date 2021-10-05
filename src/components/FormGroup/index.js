import PropTypes from 'prop-types';
import './FormGroup.scss';

export default function FormGroup({ children, error }) {
  return (
    <div className="FormGroup">
      { children }
      <small>{error}</small>
    </div>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};

FormGroup.defaultProps = {
  error: null,
};
