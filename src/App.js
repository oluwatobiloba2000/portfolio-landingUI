import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import homeView from './views/homeView';
import Slide from './components/slide';
import NotFound from './components/NotFoundPage';
import AboutView from './views/aboutView';
import resumeView from './views/resumeView';
import portfolioView from './views/portfolioView';
import blogView from './views/blogView';
import contactView from './views/contactView';
// import SingleBlog from './container/singleBlogContainer';
import './App.css';



class App extends React.Component {
  // componentDidMount(){
  //     window.addEventListener('blur', (e)=>{
  //     console.log("EVENT: window blur",e.target.location.pathname)
  //   })
  //   window.addEventListener('focus', (e)=>{
  //     console.log('Event : window on focus',e.target.location.pathname)
  //   })
  // }
  render(){
    return(
        <Router>
          <Slide/>
          <Switch>
            <Route  exact={true} path="/" component={homeView}/>
            <Route  path="/about" component={AboutView}/>
            <Route  path="/resume" component={resumeView}/>
            <Route path="/portfolio" component={portfolioView}/>
            <Route path="/blog" component={blogView}/>
            <Route path="/contact" component={contactView}/>
              {/* <Route  path="/blog/view/:id" component={blogView}/> */}
            <Route component={NotFound} />
           </Switch>
        </Router>
    )
  }
}


export default App;
