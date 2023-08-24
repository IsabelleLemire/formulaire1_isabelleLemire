import { useState } from 'react';
import BsForm from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"; 
import Input from './Input';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    lastname: '',
  });

  const onChange = (newValue, id) => {
    console.log("onChange")
    console.log("newValue", newValue, "id", id)
    setFormData({ //viens prendre l'ancien objet de form data et viens le recopier dans le nouvel objet et ça deviens mon nouveau state
        ...formData, 
        [id]: newValue,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault(); //permet de ne pas recharger la page

    alert(JSON.stringify(formData, null, 2));
  };


  return (
    <BsForm onSubmit={onSubmit}>
        <Row>
          <Input value={formData.name} id="name" onChange={onChange}/>
        </Row>
        <Row>
          <Input value={formData.lastname} id="lastname" onChange={onChange}/>
        </Row>
        <Row>
          <Input value={formData.email} id="email" onChange={onChange}/>
        </Row>
        <Row>
          <Input type="password" value={formData.password} id="password" onChange={onChange}/>
        </Row> 

        <Button type="submit" variant="danger">Claim your free trial</Button>    
    </BsForm>
  )
}

export default LoginForm;