import { Provider } from 'react-redux';
import './App.css';
import {store} from './store'
import UsersList from './components/UsersList'

function App() {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
}

export default App;
