/**
 * Special thanks to Kaden Kilburg for porting the d20 to
 */
import React, {useRef} from 'react';
import {Anchor, Illustration, Polygon, useRender} from 'react-zdog';

/** --- Basic, re-usable data -------------------------- */
const TAU = Math.PI * 2;

const eggplant = '#636';
const garnet = '#c25';
const orange = '#e62';
const gold = '#ea0';
const yellow = '#ed0';

// geometry
const ROOT3 = Math.sqrt(3);
// radius of triangle with side length = 1
const faceRadius = ROOT3 / 2 * 2 / 3;
const faceHeight = faceRadius * 3 / 2;
const capApothem = 0.5 / Math.tan(TAU / 10);
const capRadius = 0.5 / Math.sin(TAU / 10);
const capTilt = Math.asin(capApothem / faceHeight);
const capSagitta = capRadius - capApothem;
const sideTilt = Math.asin(capSagitta / faceHeight);
const sideHeight = Math.sqrt(faceHeight * faceHeight - capSagitta * capSagitta);

/** --- Assembly ----------------------------------------- */

/**
 * TODO maybe add options for different movement profiles? Changing speed and
 * movement function seems like it would be fun.
 */
function DiceModel()
{
	// useRender allows us to hook into the render-loop*/
	const ref = useRef();
	let t = 0;

	useRender(() =>
	{
		ref.current.rotate.x = Math.cos((t += 0.1) / 1000) * 100 * Math.PI;
		ref.current.rotate.y = Math.cos((t += 0.1) / 1000) * 100 * Math.PI;

	});

	let createDie = function()
	{

		let pieces = [];

		[-1, 1].forEach(function(ySide)
		{
			const capColors = {
				'-1': [garnet, gold, yellow, gold, orange],
				1: [gold, garnet, eggplant, garnet, orange],
			}[ySide];

			const sideColors = {
				'-1': [garnet, gold, yellow, orange, garnet],
				1: [gold, garnet, eggplant, orange, orange],
			}[ySide];

			for (let i = 0; i < 5; i++)
			{
				let capRotateX = -capTilt;
				let isYPos = ySide > 0;
				capRotateX += isYPos ? TAU / 2 : 0;

				// cap face
				let face = <Polygon
					sides={3}
					radius={faceRadius}
					translate={{y: -faceRadius / 2}}
					stroke={false}
					fill={true}
					color={capColors[i]}
				>
				</Polygon>;

				let capAnchor = <Anchor
					translate={{z: capApothem * ySide}}
					rotate={{x: capRotateX}}
				>
					{face}
				</Anchor>;

				let sideFace = React.cloneElement(face, {
					translate: {y: -faceRadius / 2},
					rotate: {y: TAU / 2},
					color: sideColors[i]
				});

				let sideRotateX = -sideTilt;
				sideRotateX += isYPos ? 0 : TAU / 2;
				let sideAnchor = React.cloneElement(capAnchor,
					{rotate: {x: sideRotateX}},
					[sideFace]
				);

				let rotor =
					<Anchor
						rotate={{y: TAU / 5 * -i}}
						translate={{y: sideHeight / 2 * ySide}}>
						{capAnchor}
						{sideAnchor}
					</Anchor>;

				pieces.push(rotor);
			}
		});

		return (
			<Anchor ref={ref} translate={{x: 0, y: 0}} scale={1.2}>
				{pieces}
			</Anchor>
		);
	};

	return createDie();
}

function DiceIll()
{
	return (
		<Illustration zoom={1} scale={60}>
			<DiceModel />
		</Illustration>
	);
}

export default DiceIll;