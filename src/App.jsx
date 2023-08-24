import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

import LoginForm from "./components/Form";

function App() {

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Container>
              <Card.Title>Learn to code by watching others</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptas voluptate, in aspernatur sed asperiores enim commodi hic odit veritatis iusto nulla doloremque fuga impedit deserunt ex pariatur nisi cupiditate?</Card.Text>
            </Container>
          </Col>
          <Col>
            <Row>
              <Card.Text>Try it free 7 days then @20/mo. thereafter</Card.Text>
            </Row>
            <Row>
              <LoginForm/>
            </Row>
            <Row>
              <Card.Text>By clicking the button bla bla blas</Card.Text>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;