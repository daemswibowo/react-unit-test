import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from './reducers';

export const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'https://jsonplaceholder.typicode.com/',
  responseType: 'json'
});

export default createStore(reducers, applyMiddleware(axiosMiddleware(client), thunk));
