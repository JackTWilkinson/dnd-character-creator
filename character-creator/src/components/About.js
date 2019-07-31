import React from "react";

export default () => (
	<>
		<h1>About</h1>
		<p>Welcome to my React project! This fun little app was made to help me
			practice react and a few of its associated libraries in a way that would
			produce something a little bit more "useful" than a simple hello world
			program! This project was made in the nano-react project environment and uses
			several additional libraries in order to add a bit more flavor/styling
			to the site. A special thanks to Kaden Kilburg for porting the dice model
		    to zdog-react from zdog common.
		</p><br/>
		<p>
			I also used this project to learn and practice my abilities with css and bootstrap.
			As of right now I am just using an external stylesheet imported into the index.js page of my site.
			Bootstrap was wonderful to use, as its many components are easy to implement and look fantastic.
		</p>
		<h3>Extra Libraries Used</h3>
		<ul>
			<li>react-router</li>
			<li>react-zdog</li>
			<li>react-bootstrap</li>
			<li>react-tabs (generic tab library that required less work than bootstrap)</li>
			{/*	TODO Update as the app is completed more */}
		</ul>
		<h3>Additional Resources Used</h3>
		<ul>
			<li>Dnd Beyond race images</li>
			<li>Zdog icosahedron model</li>
		</ul>
		<h3>Planned/Hopeful Features</h3>
		<ul>
			<li>A way to compare classes</li>
			<li>Support for dnd supplemental books</li>
			<li>Save characters/add accounts of some kind</li>
		</ul>
	</>
)
