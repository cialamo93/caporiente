import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import MeliPayment from './components/payment';

function App() {

  return (
    <Container>
      <Row>
        <Col>
          <MeliPayment />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
