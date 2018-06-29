import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default (state = initialState.counter, action) => {
  switch (action.type) {    

    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
        
      };   

    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
        
      };

    default:    
      return state;
  }
}
