import React, { useState } from 'react'
import './App.css'
import dele from './assets/icons8-delete.svg'

const TodoForm = () => {
    const [value,setvalue]=useState("")
    const [alltodos,setalltodos]=useState([])

    const handleSubmit =(e)=>{
      e.preventDefault();
    }
    const handleChange=(e)=>{
        setvalue(e.target.value)
    }
    const hanleClick=()=>{
        if(value.trim()!==""){
        setalltodos([...alltodos,value])
        setvalue("");
        }

        }
    function deleteClick(index){
     const updateTasks=alltodos.filter((_,i)=>i!==index)
     setalltodos(updateTasks)
    }

  return (
    <form className='form_wrapper' onSubmit={handleSubmit}>
      <h1>Get Things Done!</h1>
      <div className='input_box'>
      <input type='text'value={value} placeholder='What is the task today?' className='task' onChange={handleChange}/>
      <div type='submit' className='button' onClick={hanleClick}>Add Task</div>
      </div><br/>
      
      {alltodos.map((task,index)=>
      <>
      <div className='space' key={index}>
      <div className='text'>{task}</div>
      <img onClick={()=>deleteClick(index)} src={dele}/>
      </div></>
       )}
    </form>
  )
  }

export default TodoForm

