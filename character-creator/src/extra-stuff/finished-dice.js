import ReactDOM from 'react-dom';
import React, {useRef} from 'react';
import {Anchor, Group, Illustration, Polygon, useRender} from 'react-zdog';
// New react-spring target, for native animation outside of React
import {NumberComp} from "./numbers";
import './styles.css';

​
/** --- Basic, re-usable data -------------------------- */
const TAU = Math.PI * 2;
​
var eggplant = '#636';
var garnet = '#C25';
var orange = '#E62';
var gold = '#EA0';
var yellow = '#ED0';
​
/** --- Assembly ----------------------------------------- */
​
var lastMove = {x: 0, y: 0};
var velocity = {x: 0, y: 0};
var epsilon = Math.PI / 8;
​
function Icosahedron() {

	// useRender allows us to hook into the render-loop*/
	const ref = useRef()
	useRender(() => {
		//ref.current.rotate.y = Math.cos((t += 0.1) / TAU);
		if (velocity.x > epsilon)
			ref.current.rotate.x += (velocity.x -= 1) / 200;
		else if (velocity.x < -epsilon)
			ref.current.rotate.x += (velocity.x += 1) / 200;
		if (velocity.y > epsilon)
			ref.current.rotate.y += (velocity.y -= 1) / 200;
		else if (velocity.y < -epsilon)
			ref.current.rotate.y += (velocity.y += 1) / 200;
	})
​
  var createIcosahedron = function() {
  ​
	  // geometry
	  var ROOT3 = Math.sqrt(3);
	  // radius of triangle with side length = 1
	  var faceRadius = ROOT3/2 * 2/3;
	  var faceHeight = faceRadius * 3/2;
	  var capApothem = 0.5 / Math.tan( TAU/10 );
	  var capRadius = 0.5 / Math.sin( TAU/10 );
	  var capTilt = Math.asin( capApothem / faceHeight );
	  var capSagitta = capRadius - capApothem;
	  var sideTilt = Math.asin( capSagitta / faceHeight );
	  var sideHeight = Math.sqrt( faceHeight*faceHeight - capSagitta*capSagitta );
​
    var pieces = [];
​
    var numbers = [
		20, //correct
		8, //19 //correct
		14, //18 //correct
		6, //17 //correct
		4, //16 //correct
		11, //15 //correct
		18, //14 //correct
		5, //13 //correct
		2, //12 //correct
		12, //11 //correct
		1, //10 //correct
		13, //9 //correct
		7, //8 //correct
		15, //7 //correct
		17, //6 //correct
		10, //5 //correct
		3, //4 //correct
		16, //3 //correct
		19, //2 //correct
		9, //1 //correct
	];
​
    [ -1, 1 ].forEach( function( ySide ) {
		var capColors = {
			'-1': [ garnet, gold, yellow, gold, orange ],
			1: [ gold, garnet, eggplant, garnet, orange ],
		}[ ySide ];

		var sideColors = {
			'-1': [ garnet, gold, yellow, orange, garnet ],
			1: [ gold, garnet, eggplant, orange, orange ],
		}[ ySide ];
​
      for ( var i=0; i < 5; i++ ) {
		  var capRotateX = -capTilt;
		  var isYPos = ySide > 0;
		  capRotateX += isYPos ? TAU/2 : 0;

​
		  // cap face
		  var face = <Polygon
			  sides= {3}
			  radius= {faceRadius}
			  translate= {{ y: -faceRadius/2 }}
			  stroke= {false}
			  fill= {true}
			  color= {capColors[i]}
		  >
		  </Polygon>
​
        var numberComp =
			<Group scale={1/8} rotate={{x:Math.PI}} translate={{z:-0.01}}>
				<NumberComp num={numbers.pop()} fontColor={"#fff"} strokeWidth={2}/>
			</Group>
​
        var sideFace = React.cloneElement(face, {
			translate: { y: -faceRadius/2 },
			rotate: { y: TAU/2 },
			color: sideColors[i]
		}, numberComp)
​
        numberComp =
			<Group scale={1/8} rotate={{x:Math.PI}} translate={{z:-0.01}}>
				<NumberComp num={numbers.pop()} fontColor={"#fff"} strokeWidth={2}/>
			</Group>
		  face = React.cloneElement(face, {}, numberComp);
​
        var capAnchor = <Anchor
			translate= {{ z: capApothem * ySide }}
			rotate= {{ x: capRotateX }}
		>
			{face}
		</Anchor>
​
        var sideRotateX = -sideTilt;
		  sideRotateX += isYPos ? 0 : TAU/2;
		  var sideAnchor = React.cloneElement(capAnchor,
			  {rotate: { x: sideRotateX }},
			  [sideFace]
		  );
​
        var rotor =
			<Anchor
				rotate= {{ y: TAU/5 * -i }}
				translate= {{ y: sideHeight/2 * ySide }}>
				{capAnchor}
				{sideAnchor}
			</Anchor>
​
        pieces.push(rotor);
	  }
	})
​
    var icosahedron =
		<Anchor ref={ref} translate= {{x: 0, y:0}} scale={1.2}>
			{pieces}
		</Anchor>
​
    return icosahedron;
  }
​
  return createIcosahedron();
}
​
ReactDOM.render(
	<Illustration zoom={1} scale={8} dragRotate={true}
​
onDragMove= {function( pointer, moveX, moveY ) {
	// move rotation
	lastMove.x = moveX;
	lastMove.y = moveY;
}}
onDragEnd = {function() {
	velocity.x = lastMove.x;
	velocity.y = lastMove.y;
	lastMove.x = 0;
	lastMove.y = 0;
}}>

<Icosahedron />
</Illustration>,
document.getElementById('root')
)