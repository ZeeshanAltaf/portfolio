import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avataaars.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Projects from "../Projects/Projects";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <br />
            <br />
            <p className="home-about-body">
              I am a <b className="purple">ReactJS developer </b> with expertise in
               <b className="purple"> frontend </b> I bring a wealth of knowledge in web technologies 
               including <b className="purple">HTML5, CSS3, JavaScript, and ReactJS</b>. 
               With a passion for crafting exceptional user experiences, 
               I am dedicated to creating visually appealing and functional websites.
              <br />
              <br />
              In addition to my coding skills, I am also an avid <b className="purple">photographer</b> and <b className="purple">gamer</b>. 
              When I'm not immersed in lines of code, you can find me capturing breathtaking 
              moments through my lens or exploring virtual worlds. 
              My diverse interests fuel my creativity and provide me with a fresh
               perspective when approaching new projects.
            <br />
              <br />
              Furthermore, I have a profound love for <b className="purple">traveling</b>. Exploring different cultures
               and landscapes not only broadens my horizons but also inspires me to incorporate
                unique and captivating elements into my designs. 
              This global outlook enables me to create websites that resonate with a wide range of audiences.
              <br />
              <br />

              As a <b className="purple">contributor</b> to Open Source projects on <b className="purple">GitHub</b>,
               I actively engage in collaborative development and believe in giving back to the community. 
              By sharing my knowledge and expertise, I contribute to the growth and 
              innovation of the tech industry as a whole.
              
              <br />
              <br />
              Overall, I am a dedicated <b className="purple">React Developer</b> who combines technical expertise 
              with a passion for photography, gaming, and travel. With a commitment to 
              Open Source projects and a focus on SEO-friendly development, 
              I strive to create impactful and engaging websites that leave 
              a lasting impression on users.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Projects/>
        </Row>
        <Row>
          <br />
          <br />
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ZeeshanAltaf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zeeshanaltaf1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
