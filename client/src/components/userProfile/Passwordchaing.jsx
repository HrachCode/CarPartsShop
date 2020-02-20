const React = require('react');
import Form from 'react-bootstrap/Form'
import {Button}  from 'react-bootstrap'
import {Col}  from 'react-bootstrap'

class Passubdate extends React.Component{
  render() {
    return (
    <div className="passinps">
      <div className="passDesc">
          <span>password</span>
      </div>
      <div id="inputs">
        <Form>
<Form.Group controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>

<Form.Group controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit">
  Submit
</Button>
</Form>

      </div>
    </div>
    );
  }
}

export default Passubdate;
