import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Header = () => {
const[name, setName] = useState();
const[email, setEmail] = useState();

useEffect(()=> {
    console.log("Mounting phase", "API")
}, [email])

  return (
    <Container fluid>
      <Row>
        <Col md="12">
        <h1>Header</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
