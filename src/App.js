import './App.css';
import SearchField from './components/SearchField/SearchField';
import Items from './components/Items/Items';
import Users from './components/Users/Users';
import { useDispatch, useSelector } from 'react-redux';
import { initAll } from './components/redux/actions';
import { useEffect } from 'react';
import Modal from './components/Modal/Modal'
function App() {
  const dispatch = useDispatch();
  const usersLoading = useSelector(store => store.users.loading);
  const itemsLoading = useSelector(store => store.items.loading);
  useEffect(() => {
    dispatch(initAll());
  }, [dispatch]);

  return (
    <div className="app">
      <div className='app__container'>
        <SearchField />
        <Items/>
        <Users/>
      </div>
      {(usersLoading || itemsLoading) && <Modal>
            <h1>Loading...</h1>
      </Modal>}
    </div>
  );
}

export default App;
