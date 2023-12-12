import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col ,Container , Image, Row } from "react-bootstrap";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <FontAwesomeIcon icon={faGithub} href='https://github.com/Lammyy5' target="_blank"
                        rel="noreferrer" />
                </Col>
                <Col xs={6} md={4}>
                    <Image to='' src="holder.js/171x180" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                    <Image to='' src="holder.js/171x180" roundedCircle />
                </Col>
            </Row>
        </Container>
    )
}

export default Footer