import  React ,{userstate} from 'react';
function Mycomponent(){
    let [ name , setName]=    userstate();
    const updatename =() =>{
       setname("jack");

    }
    return(
        <div>
            <p> Name : {name}</p>
            <button onClick={ updatename}> set name </button>
        </div>
    );

}
default export Mycomponent;