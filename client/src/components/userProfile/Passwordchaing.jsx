import React from 'react'
import Form from 'react-bootstrap/Form'
import {Button}  from 'react-bootstrap'
import axios  from 'axios'
import classNames from "classnames";

class Passubdate extends React.Component{
      state = {
        errorMessage:{
            empty:false,
            confirm:true
        },
        newpassword:false,
        Password:false,
        Confirmpassword:false
      };

      onChange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
          this.setState({ [name]: value })

      };
    hendlclick = (e)=>{
          e.preventDefault();
          const s = this.state;

       const passwords = {
            newpassword:s.newpassword,
            Password:s.Password,
            Confirmpassword:s.Confirmpassword
        }
        if(s.newpassword  && s.Password && s.Confirmpassword){
            this.setState(state=>{
                return {
                    ...this.state,
                    errorMessage:{
                        empty:false,
                        confirm:false
                    } ,
                }
            })
            console.log('fetching',this.state.errorMessage)
        }else{
            console.log('zapolnite vse polya pojalusta')

            this.setState(state=>{
                return {
                    ...this.state,
                    errorMessage:{
                        empty:true,
                        confirm:false
                    } ,
                }
            })
            console.log(this.state)
        }
    };



  render() {
     let selektclass = classNames({

          'selct-pressed': this.state.errorMessage.confirm,
          'has-error has-feedback': !this.state.errorMessage.empty
      });
    return (
    <div className="passinps">
      <div className="passDesc">
          <span>password</span>
      </div>
      <div id="inputs">
        <Form>


<Form.Group controlId="formBasicPasswords">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" className={selektclass}  name="Password" onChange={this.onChange}/>
</Form.Group>
<Form.Group controlId="formBasicPassword">
  <Form.Label>Newpassword</Form.Label>
  <Form.Control type="password" placeholder="Password" className={selektclass} name="newpassword" onChange={this.onChange}/>
</Form.Group>
<Form.Group controlId="formBasicPasswordss">
  <Form.Label>Confirmpassword</Form.Label>
  <Form.Control type="password" placeholder="Password" className={selektclass} name="Confirmpassword" onChange={this.onChange}/>
</Form.Group>

<Button variant="primary" type="submit" onClick = {this.hendlclick}>
  Submit
</Button>
</Form>

      </div>
    </div>
    );
  }
}

export default Passubdate;
