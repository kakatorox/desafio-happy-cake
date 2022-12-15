import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default () => {
    return (
        <Container className="text-center">
            <h1 className="pt-5">
                Cuentanos, ¿en que te podemos ayudar?
            </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su Correo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Descripción:</Form.Label>
                    <Form.Control as="textarea"  />
                </Form.Group>
                <Button variant="primary" type="submit" className="botonForm">
                    Enviar
                </Button>
            </Form>
        </Container>
    );
};