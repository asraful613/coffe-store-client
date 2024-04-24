import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers=useLoaderData()
    const [users,setUsers]=useState(loadedUsers)
    const handleDelete=id=>{
        fetch(`http://localhost:5174/users${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount>0){
            console.log(data);
            setUsers(users.filter(user=>user._id!==id))
          }
        })
    }
    return (
        <div>
            <h1>users : {loadedUsers.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        users.map(user=>  <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td><button onClick={()=>handleDelete(user._id)} className="btn" >x</button></td>
          </tr>)
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;