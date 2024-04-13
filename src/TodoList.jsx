import React, { useState } from "react"
function TodoList(){
    const [tasks,setTasks] = useState(["Eat-BreakFast" , "Study-React", "Coding"]);
    const [newTask,setNewTask] = useState();
    function handleInput(event){
            setNewTask(event.target.value)
    }
    function handleAdd(){
        if(newTask.trim() !== ""){
        setTasks(t =>[...t,newTask])
        setNewTask("")
        }
    }
    function handleRemove(index){
        const updateTasks = tasks.filter((_,i)=> i !== index)
        setTasks(updateTasks)
    }
    function taskUp(index){
            if(index > 0 ) {
                const updateTasks = [...tasks];
                [updateTasks[index],updateTasks[index-1]] =
                [updateTasks[index-1],updateTasks[index]]
                setTasks(updateTasks);
            }
    }
    function taskDown(index){
            if(index < tasks.length-1 ) {
                const updateTasks = [...tasks];
                [updateTasks[index],updateTasks[index+1]] =
                [updateTasks[index+1],updateTasks[index]]
                setTasks(updateTasks);
            }
    }
return(
    <div className="todo-list">

        <h1>Todo-List</h1>
        <div>
        <input type="text" placeholder="Enter Task here.." 
        onChange={handleInput} value={newTask}/>
        <button className="addBtn" onClick={handleAdd}>Add</button>
        </div>
        <ol>
            {/* map through the array of tasks and create a list item for each one */}
            {tasks.map((task,index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="Remove" onClick={()=>handleRemove(index)}>Delete</button>
                    <button className="move-up" onClick={()=>taskUp(index)}>👆</button>
                    <button className="move-dowm" onClick={()=>taskDown(index)}>👇</button>
                </li>
                
                )}
        </ol>
    </div>
    
)
}
export default TodoList