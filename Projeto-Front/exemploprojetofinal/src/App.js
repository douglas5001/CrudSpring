// Importando o React
import React, { Component } from 'react';
// Importando o Component Header
import Header from './components/header/header';
// Importando o component Main
import Main from './main';



import api from './services/locacao';


class App extends Component {

  async componentDidMount() {
    const response = await api.get('star%20wars');

    console.log('RESPONSE ', response);

    //this.setState({ filmes: response.data });
  }

  render() {
    return (
      <div>
        <Header />
        <Main />

      </div>
    );
  }
}

export default App;