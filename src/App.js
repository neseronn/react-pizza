import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // console.log(fetchPizzas)
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  });

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
