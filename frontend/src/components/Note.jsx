import React,{useState,useEffect} from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  const[note,setNote]=useState();

  function handleDel(id) {
    fetch(`http://localhost:3001/${id}`, {
      method: "DELETE",
    }).then((res)=>res.json())
    .catch(err=>console.log(err,"delete error in frontend"));
  }

  function getData(){
    fetch("http://localhost:3001/")
    .then((res)=>res.json())
    .then((data)=>setNote(data))
    .catch(err=>console.log(err,"get error in frontend"))
  }


  useEffect(()=>getData());

  return (
    <div>
      {note?.map((element)=>(
        <div key={element._id} className="note">
          <h1>{element.title}</h1>
          <p>{element.content}</p>
          <button onClick={()=>handleDel(element._id)}>
            <DeleteIcon />
          </button>
        </div>
        ))}
      
      </div>   
  );
}

export default Note;
