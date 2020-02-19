import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import {Button}  from 'react-bootstrap'
import {Col}  from 'react-bootstrap'
import classNames from 'classnames'

export default function UserSetingForms({ onChange, hendlClick, user,errorMessages }) {
    const [selekt,setSelekt]=useState('')
    const [newselekt,setnewSelekt]=useState(['......'])
    
    const states = ['Yerevan','Shirak','Kotaik','Lory','Taush','Armavir','Ararat','Aragacotn','Syuniq','Vayoc dzor','Gegarqunik'];
    const YerevanStates = ['Kanaqer-Zeitun','Norq-Marash','Arabkir','Malatiya-Sebastiya','Avan','Nor-Norq','Erebuni','Shengavit','Ajapnyak','Kentron'];
    const ArmavirStateas = ['Armavir','Ejmiacin','Mecamor','Dalarik','Qarakert'];
    const ShirakStates = ['Gyumri','Artik','Maralik','Ani'];
    const KotaikStates = ['Abovyan','Egvard','Zovuni','Hrazdan','Charencavan'];
    const LoriStates = ['Vanadzor','Alaverdi','Dseg'];
    const SyunikState = ['Megri','Goris','Kapan','Sisyan']
    const AragacotnStates = ['Ashtarak','Talin','Proshyan','Aparan'];
    const GegarqunikStates = ['Gavar','Garni','Chambarak','Vardenis','Martuni']
    const AraratStates = ['Ararat','Artashat','Dvin','Masis'] 
       useEffect(() => {
     let result = selekt === 'Yerevan'? YerevanStates:
    
     selekt === 'Shirak' ? ShirakStates:
     selekt === 'Kotaik' ? KotaikStates:
     selekt === 'Lory' ? LoriStates:
     selekt === 'Armavir' ? ArmavirStateas:
     selekt === 'Syuniq' ? SyunikState: 
     selekt === 'Aragacotn' ? AragacotnStates:
     selekt === 'Gegarqunik' ? GegarqunikStates:
     selekt === 'Ararat' ? AraratStates:  ['......']      
     
      setnewSelekt(result)
         },[selekt])
   
      console.log(errorMessages)
      
      var selektclass = classNames({
        btn: true,
        'selct-pressed': selekt,
        'has-error has-feedback': errorMessages.passError
      });
    var foneError = classNames({
        btn: true,
        'has-error has-feedback': errorMessages.foneError
    });
    return (
     
        <div>
         
            <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail" className={selektclass}>
      <Form.Label>New password</Form.Label>
      <Form.Control type="password" placeholder="Enter new password" name="newpasseod" onChange={onChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword" className={selektclass}>
      <Form.Label>Old password</Form.Label>
      <Form.Control type="password" placeholder="old Password" name="Password" onChange={onChange}/>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
          {errorMessages.passError?<span id="errspan">Passwords do not match</span>:null}
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" name="address" onChange={onChange} />
  </Form.Group>

  
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Fonnumber</Form.Label>
      <Form.Control placeholder="93111213" name="Fonnumber" className={foneError} onChange={onChange}/>
        {errorMessages.foneError?<span id="errspan">Passwords do not match</span>:null}
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control  as="select" name="state"  onChange = {(e)=>{
         setSelekt(e.target.value)
        return onChange(e) }}  > 
        <option>Choose...</option>
       {states.map(item=>{
           return  <option key={item}>{item}</option>
       })} 
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridStates">
      <Form.Label>City</Form.Label>
      <Form.Control as="select" name="city"  onChange={(e)=>{
        return onChange(e)
      }}> 
        <option>Choose...</option>
       {newselekt.map((item,i)=>{
           return  <option key={i}>{item}</option>
       })}
      </Form.Control>
    </Form.Group>
    

   
    <Form.Group as={Col} controlId="formGridZip" >
      <Form.Label>Name</Form.Label>
      <Form.Control  name="name" onChange={onChange} />
    </Form.Group>
  </Form.Row>

 
  <Button variant="primary" type="submit" onClick = {hendlClick}>
    Submit
  </Button>
</Form>
        </div>
    )
}
