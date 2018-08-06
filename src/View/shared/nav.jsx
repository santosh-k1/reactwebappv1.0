import React, { Component } from 'react';
import {  BrowserRouter as Redirect, Router, Route, Link, Switch } from 'react-router-dom';
import Home from '../../View/home/home';
import About from '../../View/home/about';
import Category from "../../View/Pages/Category";
import Products from "../../View/Pages/Products";
import Login, {fakeAuth} from "../../View/home/Login";
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';

class Navigation extends React.Component {
    render() {
        return (
        <div className="web-wrapper">  
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">InovateWebApp</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">
            Dashboard
          </NavItem>
          <NavItem eventKey={2} href="/category">
          Category
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
          <NavItem eventKey={2} href="/products">
          Products
          </NavItem>
          <NavItem eventKey={2} href="/admin">
          Admin
          </NavItem>
        </Nav>
      </Navbar>
      <div className="display-result">
      <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/products" component={Products} />
        </Switch>
      </div>
      </div>
  )}
}

//Private router function
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )}
    />
  );
};
//Admin component
const Admin = ({ match }) => {
  return (
    <div>
      {" "}
      <h2>Welcome admin </h2>
    </div>
  );
};

export default Navigation;
