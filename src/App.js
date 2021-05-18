import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  RouteComponentProps,
  useParams
} from "react-router-dom";

/** HOOKS — GLOBAL STATE **/
import useGlobalState from './Hooks/useGlobalState'

/** AIRTABLE API **/
import fetchData from './Airtable/fetchData'

/** PAGES **/
import Home from './Pages/Home'
import About from './Pages/About'
import Research from './Pages/Research'


import './assets/styles/App.scss';

/** PAGES **/

/** GLOBAL STATE WITH USEREDUCER **/
//create context container for global state
export const GlobalState = React.createContext()


const NoMatchPage = () => {
  return (
    <div>
      <h3 className='oops-message text-large'>Woops! This page does not exist. Maybe try going <a className='link' href='/'>Home</a>?</h3>
    </div>
  );
};


function App() {
  /* Global state object, powered by useReducer */
  const [state, dispatch] = useGlobalState();

  useEffect(() => {
    /* Pull data from airtable and into the livestream */

    const setBooks = books => {
      dispatch({
        type: "set-books",
        books
      })
    }
    fetchData("Books", setBooks)

    //CREDITS
    const setCredits = credits => {
      dispatch({
        type: "set-credits",
        credits
      })
    }
    fetchData("Credits", setCredits)

    //ABOUT COPY
    const setAuthors = authors => {
      dispatch({
        type: "set-author",
        authors: authors[0].fields
      })
    }
    fetchData("Authors", setAuthors)

    //CREDITS
    const setReadings = readings => {
      dispatch({
        type: "set-reading",
        readings: readings[0].fields
      })
    }
    fetchData("Reading List", setReadings)

    //Event
    const setCategory = categories => {
      dispatch({
        type: "set-categories",
        categories
      })
    }
    fetchData("Categories", setCategory)

  }, [dispatch])

  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      <Router>
        <div className="App">
          <Switch>
          <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/research" exact component={Research} />
          </Switch>
        </div>
      </Router>
    </GlobalState.Provider>
  )
}

export default App;


 /* 
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
  */