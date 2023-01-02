import React, { Component, createRef } from 'react';
import axios from 'axios';

export default class SignUp extends Component {

  constructor(props){
    super(props);
  this.forms=createRef()
  this.submitdata=this.submitdata.bind(this)

  }
  submitdata(event){
   
      axios.get("http://localhost:4000/SignUp?email=" + this.forms.email.value)
      .then (data=>{
        if(data.data.length === 0){
          axios.post("http://localhost:4000/SignUp", {name:this.forms.name.value,email:this.forms.email.value,password:this.forms.password.value,phoneno:this.forms.phoneno.value,})
            .then(()=>{
              alert("Account created successfully please login again")
            })
            .catch(error=>
              {
              alert(error)
            })
        }
        else{
          alert("Account already exist")
        }
      })
      
    event.preventDefault()
  }
 
    render() {
    return (
      <div>
        <div className="container">
<form onSubmit={this.submitdata} ref={ref => this.forms=ref} >
<h1>SignUp Page</h1>
<br/>
Enter your name<br/>
<input style={{width:"300px",height:"30px"}} type="text" placeholder="name" name="name"/><br/><br/>
Enter your Email<br/>
<input  style={{width:"300px",height:"30px"}} type="text" placeholder="email" name="email"/><br/><br/>
Enter your password<br/>
<input style={{width:"300px",height:"30px"}}type="password" name="password" placeholder="Password"/><br/><br/>
Enter your PhoneNo<br/>
<input style={{width:"300px",height:"30px"}} type="text" placeholder="phoneno" name="phoneno"/><br/>
<br/>

<input type="submit" value="Sign up"/>
<br/>
</form>
</div>
      </div>
    )
  }
}
