import React, { useState, useEffect } from 'react';
import StackList from './StackList';
import '../css/app.css';
import {v4 as uuidv4} from 'uuid';
import StackEdit from './StackEdit';
import StackStudy from './StackStudy';
import axios from "axios";

export const StackContext = React.createContext();
// const LOCAL_STORAGE_KEY = 'flashcar_project.stacks';

function App() {
  const [ selectedStackId, setSelectedStackId] = useState();
  const [stacks, setStacks] = useState(sampleStackArray);
  const selectedStack = stacks.find(stack => stack.id === selectedStackId);
  console.log(selectedStack);

/*   useEffect(async () => {
    const result = await axios(
      'https://localhost:44393/api/collection',
    );
 
    setStacks(result.data); 
  }); */

  useEffect(() => {
    axios
      .get("https://localhost:44393/api/collection")
	  .then(response => {
		console.log(response.data)
		setStacks(response.data)
	  });
  }, []);

/*   useEffect(() => {
    const stackJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (stackJSON != null) setStacks(JSON.parse(stackJSON))
  }, []); */

/*   useEffect(() => {
    const stackJSON = axios
      .get('https://localhost:44393/api/collection')
      .then(res => {
		console.log(res.data);
		if (stackJSON != null) setStacks(JSON.parse(stackJSON))
	  });
  }, []); */

/*   useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stacks))
  }, [stacks]); */


/*   const APIstacks = [];

  APIstacks = function getAPIresults() {
	axios.get('https://localhost:44393/api/collection').then(res => {
		console.log(res);
	}); */

  const stackContextValue = {
	handleStackAdd,
	handleStackDelete,
	handleStackSelect,
	handleStackChange
  }

  function handleStackSelect(id) {
	  setSelectedStackId(id)
  }

  function handleStackAdd() {
	const newStack = {
		id: 0,
		title: 'New Stack',
		cards: [
			{ id: uuidv4(), word: 'word', definition: 'definition' }
		]
	}
	setSelectedStackId(newStack.id);
	setStacks([ ...stacks, newStack ]);

	axios.post('https://localhost:44393/api/stack', JSON.stringify(newStack), {headers: {'Content-Type': 'application/json',}})
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  });
  }  

  function handleStackChange(id, stack) {
	  const newStacks = [ ...stacks ];
	  const index = newStacks.findIndex(s => s.id === id);
	  newStacks[index] = stack;
	  setStacks(newStacks);
  }

  function handleStackDelete(id){
	if (selectedStackId != null && selectedStackId === id) {
		setSelectedStackId(undefined)
	  }
    setStacks(stacks.filter(stack => stack.id !== id))
  }

  return (
    <div>
      <StackContext.Provider value={stackContextValue}>
	    <StackList stacks={stacks} />
		{selectedStack && <StackEdit stack={ selectedStack } />}
		{selectedStack && <StackStudy stack={ selectedStack } />}
	  </StackContext.Provider>
    </div>
  )
}



const sampleStackArray = [
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
