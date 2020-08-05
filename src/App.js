import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from "./Component/profile/ProfilPhoto";
import Adress from "./Component/profile/Address";
import Fullname from "./Component/profile/FullName";
import {
  Card,ListGroup,ListGroupItem
} from 'react-bootstrap';


function App() {
  return (
    <>
      <Card style={{ width: '18rem'}}>
      <ProfilePhoto />
        <Card.Body>
          <Card.Title><Fullname /></Card.Title>
          <Card.Text>
          <Adress />
    </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default App;
