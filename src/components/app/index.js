import React from 'react';
import { Route } from 'react-router-dom'
import CounterPage from '../counter/index'
import About from '../about';
import Header from '../common/Header';
import {withRouter} from 'react-router';
import { connect } from 'react-redux';

const App = () => (
  <div>
    <header>     
        <Header/>
    </header>

    <main>
      <Route exact path="/" component={CounterPage} />
      <Route exact path="/about-us" component={About} />      
    </main>
  </div>
)

function mapStatesToProps(state, ownProps) {
  return {
      items: state.items
  };
}

const mapDispatchToProps = dispatch => ({
 
}
)

export default withRouter(connect(mapStatesToProps, mapDispatchToProps)(App));