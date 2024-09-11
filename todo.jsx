import react  ,{useState} from 'react'
function todo(){
    const [task ,settask] = useState(["eat " ,"bathe" ,"sleep"]);
    const [newtask, setnewtask]= useState("");

    function handleInputstate(event){
        setnewtask(event.target.value)

    }

    function addtask(){

    }

    function deletetask(index){

    }

    function moveup(index){

    }

    function movedown(index){

    }


return(
    <>
    <div className='todo'>
        <h2>todo</h2>
   <input
   type='text'
   placeholder="enter something"
   value={newtask}
   onChange={handleInputstate}/> 
    <botton 
    className="Add-button"
    onclick={addtask } 
    >
        add

    </botton> 
        </div>
        <io>
            {task.map ((task,index)=>
            <li key={index}>
             <span className='text'>task</span>
             <button className='delete-button'
             onChange={ ()  =>deletetask(index)}>

             </button>

             <button className='moveup'
             onChange={ ()  =>moveup(index)}>

             </button>
             <button className='movedown'
             onChange={ ()  =>movedown(index)}>

             </button>
            </li>)}
        </io>
    
    
    </>
)
}
 export  default Todolist;