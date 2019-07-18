import ReactDOM from 'react-dom';
import React from 'react';
import {Illustration, Shape} from 'react-zdog';
// New react-spring target, for native animation outside of React
import './styles.css';

/** --- Basic, re-usable data -------------------------- */
const TAU = Math.PI * 2;

var eggplant = '#636';
var garnet = '#C25';
var orange = '#E62';
var gold = '#EA0';
var yellow = '#ED0';

/** --- Assembly ----------------------------------------- */
function NumberOne()
{
	return (
		<Shape color={gold} scale={1/8} closed={false} stroke={3}
			path={[
				{x:-4, y: -4},
				{arc: [
						{x:-1, y:-5.25}, // corner
						{x:0, y:-8} // end point
					]},
				{x:0, y:8},
				{move: {x:-4,y:8}},
				{x:4, y:8},
			]}
		>
		</Shape>
	);
}

function NumberTwo()
{
	return (
		<Shape color={gold} scale={1/8} closed={false} stroke={3}
			path={[
				{x:-4, y: -4},
				{arc: [
						{x:-4, y:-8}, // corner
						{x:0, y:-8} // end point
					]},
				{arc: [
						{x:4, y:-8}, // corner
						{x:4, y:-4} // end point
					]},
				{bezier: [
						{x:3.8, y:0}, // start control point
						{x:-3, y:2},// end control point
						{x:-4, y:8} // end point
					]},
				{x:4, y:8},
			]}
		>
		</Shape>
	);
}

function NumberThree()
{
	return (
		<Shape color={gold} scale={1/8} closed={false} stroke={3}
			path={[
				{x:-4, y: -4},
				{arc: [
						{x:-4, y:-8}, // corner
						{x:0, y:-8} // end point
					]},
				{arc: [
						{x:4, y:-8}, // corner
						{x:4, y:-4} // end point
					]},
				{arc: [
						{x:4, y:0}, // corner
						{x:0, y:0} // end point
					]},
				{arc: [
						{x:4, y:0}, // corner
						{x:4, y:4} // end point
					]},
				{arc: [
						{x:4, y:8}, // corner
						{x:0, y:8} // end point
					]},
				{arc: [
						{x:-4, y:8}, // corner
						{x:-4, y:4} // end point
					]},
			]}
		>
		</Shape>
	);
}

function NumberFour()
{
	return (
		<Shape color={gold} scale={1/8} closed={false} stroke={3}
			path={[
				{x: 4, y: 2},
				{x:-4, y: 2},
				{x: 2, y: -8},
				{x: 2, y: 8},
			]}
		>
		</Shape>
	);
}

ReactDOM.render(
	<Illustration zoom={1} scale={8} dragRotate={true}>
		{<NumberFour />}
	</Illustration>,
	document.getElementById('root')
)