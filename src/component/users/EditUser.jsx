import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
    let navigate = useNavigate()
    const {id } = useParams();
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

    useEffect( () =>{
        loadUser()
    }, [])
    const onSubmit = async(e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user).then(res=>{
            if(res){
                navigate('/')
            }
        })
        // window.location.href='/'
    }
    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`)
         setUser(result.data)
        
    }
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
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
          <button className="btn btn-primary btn-block form-control form-control-lg ">Update User</button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
