import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from '../components';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const catNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy, dispatch]);

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  const onSelectSort = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories activeCategory={category} onClickCategory={onSelectCategory} items={catNames} />
        <SortPopup activeSortType={sortBy.type} onClickSort={onSelectSort} items={sortItems} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock key={obj.id} isLoading={true} {...obj} />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
