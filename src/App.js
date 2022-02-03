import logo from './logo.svg';
import './App.css';
import Canva from './Tela/canva';
import {
  Row,
  Col
} from 'reactstrap'
import Menu from './Menu/Menu';
import { useState } from 'react';

function App() {

  const [canvasWidth, setCanvasWidth] = useState(350);
  const [canvasHeight, setCanvasHeight] = useState(350);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>

      

      <Canva canvasWidth={canvasWidth} canvasHeight={canvasHeight}>
        brownser not supported
      </Canva>

      <Row>
        <Col xl='12'>
          <Menu
          setCanvasHeight={setCanvasHeight}
          setCanvasWidth={setCanvasWidth}
          />
        </Col>
      </Row>
    </>
  );
}

export default App;
