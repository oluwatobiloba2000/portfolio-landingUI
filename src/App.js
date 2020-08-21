import React, {useEffect} from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import homeView from './views/homeView';
import NotFound from './components/NotFoundPage';
import AboutView from './views/aboutView';
import resumeView from './views/resumeView';
import portfolioView from './views/portfolioView';
// import blogView from './views/blogView';
import contactView from './views/contactView';
// import SingleBlog from './container/singleBlogContainer';
import './App.css';
import ReactGa from 'react-ga'
// const axios = require('axios').default;
// axios.defaults.baseURL = 'http://localhost:4000';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Tracking Id UA-151160030-1

function App (){
  const currentWindow = window.location.pathname;
  useEffect(()=>{
    ReactGa.initialize('UA-151160030-1');

    // report page view
    ReactGa.pageview(currentWindow + window.location.search);
  }, [currentWindow])

    return(
        <Router>
          <Switch>
            <Route  exact={true} path="/" component={homeView}/>
            <Route  path="/about" component={AboutView}/>
            <Route  path="/resume" component={resumeView}/>
            <Route path="/portfolio" component={portfolioView}/>
            {/* <Route path="/blog" component={blogView}/> */}
            <Route path="/contact" component={contactView}/>
            <Route component={NotFound} />
           </Switch>
        </Router>
    )
}


export default App;
