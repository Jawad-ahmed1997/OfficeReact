import React from 'react';
import {useState} from 'react';
function App() {


        const [Todo,setTodo]=useState([]);
        const [Todos,setTodos]=useState([]);

        
        const addTodo=()=>{
            const item={id:Math.random(),Todos}
            setTodo([...Todo,item])
            console.log(Todo)
        }
        const deletTodo=(id)=>{
            setTodo(Todo.filter(item=>item.id!==id))
        }
    return (
        <>
           <input type="text" placeholder="Type Here Todo" onChange={(e)=>setTodos(e.target.value)} />
           <button onClick={addTodo} >Add Todo</button>
           <ul>
               {Todo.map(item=>
                <li key={item.id}>{item.Todos}
                <button id={item.id} onClick={(e)=>deletTodo(item.id)}>Delete todo</button>
                </li>
                )}
               </ul> 
        </>
    )
}

export default App
