// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';

const Location = () => (
  <Row>
    <Col m={8} s={12}>
        <h5>Preencha os campos abaixo:</h5>
        <Card>
          <Row>
              <Input placeholder="Winter Balls da Silva" type="text" label="Nome" s={12} /> 
              <Input placeholder="ballswinter@gmail.com" type="email" label="Email" s={12} />
              <Input placeholder="xxx-xxx-xxx/xx" type="text" label="Cpf" s={12} />
            <Col s={12} m={12}>
              <Button waves='light' className="right pink lighten-4">CADASTRE-SE</Button>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>
);

export default Location;
