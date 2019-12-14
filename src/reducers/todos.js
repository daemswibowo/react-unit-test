import { GET } from '../actions/todos';

const initData = {
  loading: false,
  data: [],
};

export default (state = initData, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        loading: true,
      };
    case `${GET}_SUCCESS`:
      return {
        data: action.payload.data,
        loading: false,
      };
    case `${GET}_FAIL`:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
