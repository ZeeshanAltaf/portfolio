import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Zeeshan Altaf </span>
            originally from Muzaffarabad
            <span className="purple"> Azad Kashmir, Pakistan. </span>
            
            <br />
            <br />
            When I'm not busy scribbling code, I like to keep things interesting
            by travelling, gaming like there's no tomorrow, and capturing the
            nature.
          </p>
          <h3 style={{ paddingBottom: "20px", paddingTop: "20px" }}>
            More about <strong className="purple">Zeeshan </strong> 👀
          </h3>
          <p style={{ textAlign: "justify" }}>
            My
            <span className="purple"> educational</span> background is rooted in
            <span className="purple"> Software Engineering</span> at UAJK in Muzaffarabad. 
            I found myself drawn to technology and coding. So, I kept myself engaged in IT sector.
            I worked as a Lab Administrator in <span className="purple">Virtual University</span> Muzaffarabad Campus.
            I own a start-up <span className="purple">TECH IN</span> which provides the services of <span className="purple">Web Development, 
            Graphic Designing and Digital Marketing</span>.
            
            
            <br/>
            <br/>
            Now I'm totally into Frontend Development and want to persue my career as a <span className="purple">React Engineer</span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
