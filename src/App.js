import { useState } from 'react';
import './App.css';


function App() {

  const [ inputValue, setInputValue ] = useState("")
  const [ todoList, setTodoList ] = useState([])

  const handleSubmit = () => {

    // ["hello", "snksa"]

    // [{
    //   id: 1,
   //   todo: "hello",
   //   completed: true/false
    // }]

      // add the input value to the list
      const newTodo = {
        id: todoList.length + 1,
        todo: inputValue,
        completed: false
      }

      const newTodoList = [...todoList, newTodo]
      setTodoList(newTodoList)
      // clear the input text field
      setInputValue("")

  }


  const completeTodo = (id) => {
    // loop through the existing list and change the todo to be completed for the id that i have received
    
    const newTodoList = todoList.map(function(todo){

      if(todo.id === id) {
        // return {
        //   id: todo.id,
        //   todo: todo.todo,
        //   completed: true
        // }
        // return { ...todo, completed: todo.completed ? false: true}
        return { ...todo, completed: !todo.completed }
      }
      
      // do nothing retutn the same element
      return todo
    })

    setTodoList(newTodoList)
  }

  const deleteCompleted = () => {

    // const newTodoList = todoList.filter(function(item) {
    //   // if(item.completed){
    //   //   return false
    //   // }
    //   // return true

    //   // return item.completed ? false : true
    //   return !item.completed 
    // })
    
    const newTodoList = todoList.filter(item => !item.completed)

    setTodoList(newTodoList)
  }


  return (
    <div className="App">
      <header className="App-header">
          <h1>Todo List</h1>
      </header>

      <div>
        <input type="text" value={inputValue} onChange={function(e){ setInputValue(e.target.value) } }   />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {todoList.map(function(item){
          return <div onClick={() => completeTodo(item.id)} style={{ cursor: "pointer"}}>
            
            {item.completed ?  <span style={{ textDecoration: "line-through"}}>{item.todo} </span> : item.todo }
      
          </div>
        })}

      <button onClick={deleteCompleted} >Delete Completed Todos</button>
    </div>
  );
}

export default App;



/// map -- loop over the array execute a function on every item and return the new item for that array
// new array is of same size of prev array


// filter - loop over array execute a function over each item return true or false
// if you return true then that item will be retained in the array
// if false then it will be removed from the new array
// new array size can be less than orginal array.


