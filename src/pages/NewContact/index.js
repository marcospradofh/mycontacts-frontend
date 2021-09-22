import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="New Contact"
      />
      <Input type="text" />
      <Select>
        <option value="Teste">Teste</option>
        <option value="Teste">Instagram</option>
        <option value="Teste">Teste</option>
        <option value="Teste">Teste</option>
      </Select>
    </>
  );
}
