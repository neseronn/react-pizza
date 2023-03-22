import axios from 'axios';

export const setLoaded = (val) => ({
  type: 'SET_LOADED',
  payload: val,
});

export const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(process.env.REACT_APP_JSONSERVER_URL).then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
