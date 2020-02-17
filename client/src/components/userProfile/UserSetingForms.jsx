import React,{useState,useEffec} from 'react'
import Form from 'react-bootstrap/Form'
import {Button}  from 'react-bootstrap'
import {Col}  from 'react-bootstrap'


export default function UserSetingForms({ onChange, hendlClick, user }) {
   
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

    return (
        <div>
            <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>New password</Form.Label>
      <Form.Control type="password" placeholder="Enter new password" name="newpasseod" onChange={onChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Old password</Form.Label>
      <Form.Control type="password" placeholder="old Password" name="Password" onChange={onChange}/>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" name="address" onChange={onChange} />
  </Form.Group>

  
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Fonnumber</Form.Label>
      <Form.Control name="Fonnumber" onChange={onChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select"  onSelect = {(e)=>{
        console.log(e.target);
        
      }}  > 
        <option>Choose...</option>
       {states.map(item=>{
           return  <option key={item}>{item}</option>
       })} 
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
       {states.map(item=>{
           return  <option key={item}>{item}</option>
       })}
      </Form.Control>
    </Form.Group>
    

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Name</Form.Label>
      <Form.Control placeholder={user.user[0].first_name} name="name" onChange={onChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Name</Form.Label>
      <Form.Control placeholder={user.user[0].first_name} name="name" onChange={onChange} />
    </Form.Group>
  </Form.Row>

 
  <Button variant="primary" type="submit" onClick = {hendlClick}>
    Submit
  </Button>
</Form>
        </div>
    )
}
