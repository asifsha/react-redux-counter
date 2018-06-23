import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as counterActions from '../../actions/counterActions';
import CounterForm from './counterForm';

export class CounterPage extends React.Component {
  
 
  render() {   
      return (
          <CounterForm
              count={this.props.count}              
              onIncrement={this.props.actions.increment}              
              onDecrement={this.props.actions.decrement}              
          />
      );
  }
}

const mapStateToProps = state => (   
    {        
  count: state.counter.count
  
})


const mapDispatchToProps = dispatch =>   ({
    actions: bindActionCreators(counterActions, dispatch)
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CounterPage);