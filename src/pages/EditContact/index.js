import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

export default function EditContact() {
  return (
    <>
      <PageHeader
        title="Edit Contact"
      />
      <ContactForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
