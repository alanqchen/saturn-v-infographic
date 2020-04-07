import React from 'react';
import './App.css';
import SaturnVSVG from './saturnV.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container id="containerNoMargin">
          <Row>
            
          <img src={SaturnVSVG} className="SaturnVSVG" alt="logo" />
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
