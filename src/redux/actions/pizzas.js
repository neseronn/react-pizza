import axios from 'axios';

export const fetchPizzas = () => (dispatch) => {
  axios.get(process.env.REACT_APP_JSONSERVER_URL).then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
