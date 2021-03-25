import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  RouteComponentProps,
  useParams
} from "react-router-dom";
import './App.scss';
import {Homepage, About, Research} from './components'
const NoMatchPage = () => {
  return (
    <div>
      <h3 className='oops-message text-large'>Woops! This page does not exist. Maybe try going <a className='link' href='/'>Home</a>?</h3>
    </div>
  );
};
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        err : null,
        isLoaded : false,
        homepage: [],
        about: [],
        projects: []
    };
  }

  componentDidMount() {
      fetch('https://api.airtable.com/v0/appKu09OChpFPRnnc/Homepage?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
        .then(res => res.json())
        .then(res => {
          this.setState({ homepage: res.records.reverse() })
        })
        .catch(error => console.log(error))
      fetch('https://api.airtable.com/v0/appKu09OChpFPRnnc/About?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
        .then(res => res.json())
        .then(res => {
          this.setState({ about: res.records })
        })
        .catch(error => console.log(error))
      fetch('https://api.airtable.com/v0/appKu09OChpFPRnnc/Projects?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
        .then(res => res.json())
        .then(res => {
          this.setState({ projects: res.records })
        })
        .catch(error => console.log(error))
    

        
  }


render() {
  const { projects, about, homepage } = this.state;
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage projects={projects} about={about} homepage={homepage}/>
        </Route>
        <Route exact path="/about">
          <About projects={projects} about={about} homepage={homepage}/>
        </Route>
        <Route exact path="/research">
          <Research projects={projects} about={about} homepage={homepage}/>
        </Route>
        </Switch>
    </div>
    </Router>
  );
}

}

export default App;