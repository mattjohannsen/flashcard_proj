import React from 'react';
import StackList from './StackList';
import '../css/app.css';

function App() {
  return (
    <div>
      <StackList stacks={MattsTestCards}/>
    </div>
  )
}

const MattsTestCards = [
 	{
 		"id":1,
 		"title":"React",
 		"cards":[
 			{
 				"id":1,
 				"word":"state",
 				"definition":"JS object that holds values for a component"
 			},
 			{
 				"id":2,
 				"word":"props",
 				"definition":"A way to pass data into components on initialization"
 			},
 			{
 				"id":3,
 				"word":"component",
 				"definition":"Reusable building blocks for UI using JSX"
 			}
 			]
 	},
 	{
 		"id":2,
 		"title":"C#",
 		"cards":[
 			{
 				"id":4,
 				"word":"variable",
 				"definition":"Named space in memory"
 			},
 			{
 				"id":5,
 				"word":"class",
				"definition":"Template for an object that consists of member variables, constructor, methods"
 			},
 			{
 				"id":6,
 				"word":"object",
 				"definition":"Instance of a class"
 			}
 			]
 	},
 	{
 		"id":3,
 		"title":"Flutter",
 		"cards":[
 			{
 				"id":7,
 				"word":"widget",
 				"definition":"Reusable component in Flutter"
 			}
 			]
 	}
 ]

export default App;
