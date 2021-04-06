import './App.css';
import { Button,Form,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
<Form>
  <Form.Row >
    <Form.Group as={Col}>
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>
  <Form.Group>
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col}>
      <Form.Label>City</Form.Label>
      <Form.Control placeholder="Janduba, Beja, Sfax"/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Janduba</option>
        <option>Beja</option>
        <option>Sfax</option>
        <option>Tunis</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Zip</Form.Label>
      <Form.Control placeholder="8115"/>
    </Form.Group>
  </Form.Row>
  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
