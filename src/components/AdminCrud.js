import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddData } from '../redux/CrudAdmin'
import {Deletedata} from '../redux/CrudAdmin'
import { nanoid } from 'nanoid'

const AdminCrud = () => {
    const [name, setname] = useState('')
    const [username, setusername] = useState('')
    const list=useSelector((state)=>state.crud.data)
    const dispatch=useDispatch()

  return (
    <div>
        <h1>Entry Data</h1>
        <input type='text' className='' value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <br/>
        <input type='text' className='mt-4' value={username} onChange={(e)=>{setusername(e.target.value)}} />
            <br/>
        <button className='mt-5' onClick={()=>{dispatch(AddData({id:nanoid(), name,username}))}}>Add Data</button>
        <h2>Data List</h2>
        {list.map((user)=>{
       return(
        <div key={user.id}>
          
            <ul>{user.name}</ul>
            <ul>{user.username}</ul>
            <button onClick={()=>{dispatch(Deletedata(user.id))}}>Delete</button>
        </div>
           )


        })}

    </div>
  )
}

export default AdminCrud