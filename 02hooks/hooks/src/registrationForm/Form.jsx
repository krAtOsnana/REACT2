import React,{useState} from "react";



function Form(){

    let [formData, setFormData] = useState({
        username:"guest",
        email:"",
        password:"",
        Confirm_Password:"",
        });
    

       let handdelClick=(e)=>{
            let name= e.target.name;
            let value= e.target.value;
            setFormData((prev)=>{
                return{ ...prev , [name] : value};
            })

        }

    return(
        <>
            
            <div className="container">
                <p className="title"><b>REGISTRATION FORM</b></p>

                <input type="text"
                placeholder="Name"
                onChange={handdelClick}
                value={formData.username}
                name="username"/>

                <input type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handdelClick}
                />
                <input type="text"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handdelClick}
                />
                <input type="text"
                placeholder="Confirm_Password"
                name="Confirm_Password"
                value={formData.Confirm_Password}
                onChange={handdelClick}
                />
                <button>confirm</button>
                <p>userName:{formData.username} <br /> Email:{formData.email} </p>
            </div>


            {/* <div className="container">
                <p className="title"><b>registration</b></p>
                <input type="text" placeholder="Name" onChange={(e)=>setUser(e.target.value)}/>
                <input type="text" placeholder="Email" onChange={(e)=>setMAil(e.target.value)}/>
                <input type="text" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <input type="text" placeholder="Confirm Password" onChange={(e)=>setConfPassword(e.target.value)}/>
                <button>confirm</button>
                <p>userName:{user} <br /> Email:{mail} </p>
            </div> */}
        </>

    );
};
export default Form;