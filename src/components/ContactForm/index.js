import PropTypes from 'prop-types';

import './ContactForm.scss';

import { useState } from 'react';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../assets/utils/isEmailValid';
import formatPhone from '../../assets/utils/formatPhone';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [origin, setOrigin] = useState('');

  const {
    errors, getErrorMessageByFieldName, removeError, setError,
  } = useErrors();

  const isFormValid = (name && errors.length === 0);

  function handleNameChange(event) {
    const { value } = event.target;
    setName(value);
    if (!value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    const { value } = event.target;
    setEmail(value);
    if (value && !isEmailValid(value)) {
      setError({ field: 'email', message: 'E=mail inválido' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }
  return (
    <form className="ContactForm">
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          type="text"
          placeholder="*Nome"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="phone"
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </FormGroup>
      <FormGroup>
        <Select
          value={origin}
          onChange={({ target }) => setOrigin(target.value)}
        >
          <option value="">Selecione a origem</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>
      <div className="ContactForm__button">
        <Button type="Submit" disable={!isFormValid}>{buttonLabel}</Button>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
