import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function Adduser() {
    let navigate = useNavigate()
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })
    const onInputChange = (e) =>{
        setUser({...user,[e.target.name]: e.target.value})
    }

    const onSubmit = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:3003/users', user).then(res=>{
            if(res){
                navigate('/')
            }
        })
        // window.location.href='/'
        
    }
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={(e)=> onInputChange(e)}
            />
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your User Name"
              name="username"
              value={user.username}
              onChange={(e)=> onInputChange(e)}
            />
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Email Address"
              name="email"
              value={user.email}
              onChange={(e)=> onInputChange(e)}
            />
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={user.phone}
              onChange={(e)=> onInputChange(e)}
            />
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={user.website}
              onChange={(e)=> onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block form-control form-control-lg ">Add User</button>
        </form>
      </div>
    </div>
  );
}

export default Adduser;
