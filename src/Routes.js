import { Switch, Route } from 'react-router-dom';
import { Home, NewContact, EditContact } from './pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />
    </Switch>
  );
}
