import './Loader.scss';
import ReactDOM from 'react-dom';

export default function Loader() {
  return ReactDOM.createPortal(
    <div className="Loader">
      <div className="Loader__loading" />
    </div>,
    document.getElementById('loader-root'),
  );
}
