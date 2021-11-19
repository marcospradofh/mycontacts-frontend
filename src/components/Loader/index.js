import './Loader.scss';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default function Loader({ isLoading }) {
  if (!isLoading) return null;
  return ReactDOM.createPortal(
    <div className="Loader">
      <div className="Loader__loading" />
    </div>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
