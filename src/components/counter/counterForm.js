import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar } from 'react-bootstrap';;

const CounterForm = ({ count, onIncrement, onDecrement, isIncrementing, isDecrementing }) => {
  return (
    <div>
      <h1>Counter</h1> 
      <h2>Counter Value</h2>
      <p>Count: {count}</p>
      <ButtonToolbar>
        <button         
          className="btn btn-primary"
          bsStyle="primary"
          onClick={onIncrement}>Increment </button>        

        <button
          value={'Decrement'}          
          className="btn btn-success"
          onClick={onDecrement}>Decrement</button>
       
      </ButtonToolbar>
    </div>
  );
};

CounterForm.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired, 
  onDecrement: PropTypes.func.isRequired  
};

export default CounterForm;
