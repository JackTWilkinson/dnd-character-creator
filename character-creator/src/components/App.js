import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "./Home";
import About from "./About";
import CreateNew from "./CreateNew";

function NoMatch()
{
	return <h1>404 - Page Not Found!</h1>
}

export default function AppRouter()
{
	return (
		<Router>
			<div>
				{/*<nav className="navBar">*/}
				{/*	<ul className="navList">*/}
				{/*		<li className="navItem active">*/}
				{/*			<Link to="/">Home</Link>*/}
				{/*		</li>*/}
				{/*		<li>*/}
				{/*			<Link to="/about">About</Link>*/}
				{/*		</li>*/}
				{/*	</ul>*/}
				{/*</nav>*/}

				<Navbar fixed="top" bg="dark" expand="lg">
					<Navbar.Brand href="#home">Site Nav</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link to="/">Home</Nav.Link>
							<Nav.Link to="/about">About</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/create/new" component={CreateNew}/>
					{/*<Route path="/create/class" component={ClassSelect}/>*/}
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	)
}



