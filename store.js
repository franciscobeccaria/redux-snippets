import { createStore } from 'redux';
import { ADD_TO_CART } from './actions';

const initialStore = {
  cart: [],
};

const rootReducer = (state = initialStore, action) => {
  console.log(action);
  console.log(state);
  if (action.type === ADD_TO_CART) {
    return {
      ...state,
      cart: state.cart.concat(action.id),
    };
  }
};

export default createStore(rootReducer);
