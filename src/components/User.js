import React,{useState} from 'react'

const User = () => {

    const [regemail, setregemail] = useState()
    const [regpassword, setregpassword] = useState()
    const [loginemail, setloginemail] = useState()
    const [loginpassword, setloginpassword] = useState()
    
    const loginHandle=()=>{

    }
    const registarHandle=()=>{

    }

  return(
    <div className='container-fluid'>
    

    <div className=' row '>

  <h3 > Registar</h3>
  
<input className="  mt-3" type="text" placeholder='E-mail' value={regemail}  onChange={(e)=>setregemail(e.target.value)}/>
<br/>
<input className=" mt-3" type="password" placeholder='Password' value={regpassword} onChange={(e)=>setregpassword(e.target.value)} />
<br/>
<button className="btn-success  mt-4" type='submit' onClick={registarHandle} >Registration !</button>
</div>
 




<div className=' row '>

<h3 > Login</h3>

 <input className="  mt-3" type="text" placeholder='E-mail' value={loginemail}  onChange={(e)=>setloginemail(e.target.value)}/>
  <br/>
 <input className=" mt-3" type="password" placeholder='Password' value={loginpassword} onChange={(e)=>setloginpassword(e.target.value)} />
<br/>
<button className="btn-success  mt-4" type='submit' onClick={loginHandle} >Login !</button>
</div>


<div className='row mt-5'>
<button className='btn-danger'>Logout</button>
</div>






</div>


    
  )
}

export default User
