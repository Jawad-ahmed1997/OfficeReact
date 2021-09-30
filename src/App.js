import React, { useEffect } from 'react';
import {useState} from 'react';
function App() {


        const [Todo,setTodo]=useState([]);
        const [Todos,setTodos]=useState([]);

        
        const addTodo=()=>{
            const item={id:Math.random(),Todos}
            setTodo([...Todo,item])
            console.log(Todo)
        }
    return (
        <>
           <input type="text" placeholder="Type Here Todo" onChange={(e)=>setTodos(e.target.value)} />
           <button onClick={addTodo} >Add Todo</button>
           <ul>
               {Todo.map(item=>
                <li>{item.Todos}
                <button>Delete todo</button>
                <button>Delete todo</button>
                <button>Delete todo</button>
                <button>Delete todo</button>
                </li>
                )}
               </ul> 
        </>
    )
}

export default App
