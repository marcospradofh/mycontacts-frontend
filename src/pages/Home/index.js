import { Link } from 'react-router-dom';

import { useEffect, useState, useMemo } from 'react';
import styles from './styles.module.scss';

import Loader from '../../components/Loader';
import arrow from '../../assets/images/arrow.svg';
import trash from '../../assets/images/trash.svg';
import edit from '../../assets/images/edit.svg';
import ContactsService from '../../services/ContactsService';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()))), [contacts, searchTerm]);

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);
        const contactsList = await ContactsService.listContacts(orderBy);
        setContacts(contactsList);
      } catch (error) {
        console.error('erro', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadContacts();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleSearchTermChange({ target }) {
    setSearchTerm(target.value);
  }

  return (
    <div className={styles.container}>
      <Loader isLoading={isLoading} />
      <input
        value={searchTerm}
        onChange={handleSearchTermChange}
        className={styles.input}
        type="text"
        placeholder="Pesquisar contato..."
      />
      <header className={styles.header}>
        <strong>
          {filteredContacts.length}
          {' '}
          {filteredContacts.length === 1 ? 'contato' : 'contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </header>

      <div className={styles.wrapper}>
        <header>
          {filteredContacts.length > 0 && (
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            {orderBy === 'asc'
              ? <img src={arrow} alt="Arrow" style={{ transform: 'rotate(180deg)' }} />
              : <img src={arrow} alt="Arrow" style={{ transform: 'rotate(0deg)' }} />}
          </button>
          )}
        </header>

        {filteredContacts.map((contact) => (
          <div key={contact.id} className={styles.card}>
            <div className={styles.info}>
              <div className={styles.contactName}>
                <strong>{contact.name}</strong>
                {contact.category_name && <small>{contact.category_name}</small>}
              </div>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </div>
            <div className={styles.actions}>
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
