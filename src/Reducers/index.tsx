import { combineReducers } from 'redux';
import productReducer from './productReducer.tsx';

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;
