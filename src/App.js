import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import ApplicantsView from './containers/ApplicantsView/ApplicantsView';
// import classes from './index.css';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path='/Applicants/' exact component={ApplicantsView} />
          </Switch>
        </Layout>
      </div>
    );

  }
}
export default App;
