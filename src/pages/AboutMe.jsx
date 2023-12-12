import { Col, Container, Image, Row } from "react-bootstrap";

 const AboutMe = () => {


  return (
    <Container >
      <Row>
    <div>
    <h2>About Me</h2>
      <Col xs={6} md={4}>
        <Image to='' src="holder.js/171x180" roundedCircle />
      </Col>
  <p>My name is Lamar Reliford I am a 24 year old coding bootcamp student at UCR. I started my education journey at Riverside Community College as a kinesiology major but quickly realized it wasnt the major for me. As a result of my realization I switched my major to business which instrested me since a lot of people i know own businesses. However I ended up taking a break from school to focus on work and educating myself. In my pursuit of new opportunity I
    stumbled across coding and have been instrested in growing in this field.
    I already learned some html from some free sites that I found online but never got around to finish learning this
    skill. </p>
    </div>
      </Row>
    </ Container>
  );
};

export default AboutMe;
