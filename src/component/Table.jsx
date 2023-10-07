import React from 'react'
import { useEffect,useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Table() {
    const[users,setUsers]=useState([]);
    const[data,setData]=useState({
        userId:"",
        id:"",
        title:""
    });
    useEffect(()=>{
        fetch('').then((res)=>{
            res.json().then((rr)=>{
                console.log(rr);
                setUsers(rr);
            })
        })
    },[]);
    const handleUpdate=(id)=>{
        const data=users.filter((i)=>i.id!=id);///i is the each data in array
        setUsers(data);
        const newData=users.find((i)=>i.id==id);
        setData(newData);
    }
    const handleDelete=(id)=>{
        const data=users.filter((i)=>i.id!=id);
        setUsers(data);
    }
    const handleAdd=(e)=>{
        setUsers([...users,data]);
        setData({userId:"",id:"",title:""});
    }
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
  return (
    <div>
      <h2>Fetch Data</h2>
      <div>
        <table className='table table-bordered table-striped shadow'>
            <thead>
                <tr>
                    <th>UserID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <th><input type="number" name='userId' id='userId'min={1} value={data.userId} onChange={handleChange}/></th>
                    <th><input type="number"name='id' id='id'min={1} value={data.id} onChange={handleChange} placeholder='Must be Unique'/></th>
                    <th><input type="text" name='title' id='title' value={data.title} onChange={handleChange} /></th>
                    <th><button className='btn btn-outline-primary' onClick={handleAdd} type='submit'>Add Data</button></th>
                </tr>
            </thead>
            <tbody>
               {
                users.map((d)=>{
                    return(
                        <tr key={d.id}>
                            <td>{d.userId}</td>
                            <td>{d.id}</td>
                            <td>{d.title}</td>
                          
                            <td><button className='btn btn-outline-info' onClick={()=>{handleUpdate(d.id)}}>Update</button></td>
                            <td><button className='btn btn-outline-danger' onClick={()=>{handleDelete(d.id)}}>Delete</button></td>
                        </tr>
                    )
                })
               }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
