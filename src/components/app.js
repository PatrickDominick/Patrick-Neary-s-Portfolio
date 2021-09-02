import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import BlogDetail from "./pages/blog-detail";
import PortfolioManager from "./pages/portfolio-manager";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";
import Icons from "../helpers/icons";


export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulogin = this.handleSuccessfulogin.bind(this)
    this.handleUnSuccessfulogin = this.handleUnSuccessfulogin.bind(this)
    this.handleSuccessfulogout = this.handleSuccessfulogout.bind(this)
  }

  handleSuccessfulogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnSuccessfulogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  handleSuccessfulogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios.get("https://api.devcamp.space/logged_in", 
      { withCredentials: true })
      .then(response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        // If loggedIn and status LOGGED_IN => return data
        // If loggedIn status NOT_LOGGED_IN => update state
        // If not loggedIn and status LOGGED_IN => update state

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
            this.setState({
              loggedInStatus: "NOT_LOGGED_IN"
            });
        }
      })
      .catch(error => {
        console.log("Error", error);
      })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [
      <Route key = "portfolio-manager" path="/portfolio-manager" component={PortfolioManager} /> 
      //added key to get rid of warning
      
    ]
  }

  render() {
    
    return (
      <div className="container">
        <Router>
          <div>
            
            <NavigationContainer 
            loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulogout = {this.handleSuccessfulogout}
            />

            
            <Switch>
              <Route exact path="/" component={Home} />

              <Route 
                path="/auth"
                render = {
                  props => (
                    <Auth 
                      {...props}
                      handleSuccessfulogin = {this.handleSuccessfulogin}
                      handleUnSuccessfulogin = {this.handleUnSuccessfulogin}
                    />
                  )
                } 
                />

              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />

              <Route path="/blog" 
                render={props => (
                  <Blog {...props} loggedInStatus={this.state.loggedInStatus} />
                )}
              />

              <Route path="/b/:slug" component={BlogDetail} />
              {this.state.loggedInStatus === "LOGGED_IN" ? (this.authorizedPages() ): null}
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

        
        
      </div>
    );
  }
}