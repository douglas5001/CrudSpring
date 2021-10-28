// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, NavItem, Row, Col, } from 'react-materialize';

const Header = () => (
  <Row>
    <Col m={12}>


      <Navbar className="red lighten-4">

        <NavItem href='/'>Sobre Nós</NavItem>
        <NavItem href='/'>Produtos</NavItem>
        <NavItem href='/'>Contato</NavItem>
        <NavItem href='/location'>Cadastre-se</NavItem>
        <NavItem href='/'>Login</NavItem>
        <NavItem href='/'>🍨 Bolas de Neve 🍨</NavItem>
      </Navbar>
    </Col>
  </Row>
);

export default Header;