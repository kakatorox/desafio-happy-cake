import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
    return (
            <Navbar className="navegador">
                <Container className="justify-content-start">
                    <Link to="desafio-happy-cake/" className="text-white ms-3 text-decoration-none">
                        🏠Home
                    </Link>
                    <Link to="desafio-happy-cake/contacto" className="text-white ms-3 text-decoration-none">
                        📒Contacto
                    </Link>
                    <Navbar.Collapse className="justify-content-end">
                        
                            Happy Cake 🍰
                        
                    </Navbar.Collapse>
                   
      
                </Container>
            </Navbar>
        
    );
}