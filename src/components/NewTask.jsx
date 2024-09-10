import { useState } from "react"

export default function NewTask({onAdd}){
    const[enteredTask,setEnteredTask] = useState('');

    function handletaskchange(event){
        setEnteredTask(event.target.value);
    }
    function handleClick(){
        if(enteredTask.trim() === ''){
            return 
        }
        onAdd(enteredTask);
        setEnteredTask('');
        console.log(enteredTask);
    }
    return(
        <div className="flex items-center gap-4">
            <input 
            type="text" 
            className="w-64 px-2 py-1 bg-stone-200 rounded-sm"
            onChange={handletaskchange}
            value={enteredTask}
            />

            <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
        </div>
    )
}