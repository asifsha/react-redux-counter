import * as types from './actionTypes';


export const increment = () => {
    return dispatch => {    
  
      dispatch({
        type: types.INCREMENT
      })
    }
  }  
  
  export const decrement = () => {
    return dispatch => {    
  
      dispatch({
        type: types.DECREMENT
      })
    }
  }
  
  