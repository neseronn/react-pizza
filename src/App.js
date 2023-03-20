import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchPizzas } from './redux/actions/pizzas';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/cart' element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
