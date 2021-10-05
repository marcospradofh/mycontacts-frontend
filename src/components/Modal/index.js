import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';
import Button from '../Button';

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <div className={!danger ? 'Modal' : 'Modal Modal__danger'}>
      <div className="Modal__content">
        <h1>Titulo do modal</h1>
        <p>Corpo do modal</p>

        <footer>
          <button className="Modal__cancelButton" type="button">Cancelar</button>
          <Button type="button" danger={danger}>Deletar</Button>
        </footer>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
