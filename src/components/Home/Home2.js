import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Group 1 (1).png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I discovered my passion for digital marketing early on, and since then, I've been on a journey of continuous learning and innovation.
              <br />
              <br />I specialize in 
              <i>
                <b className="purple">SEO, Social Media Marketing, and AI-powered Marketing Strategies,  </b>
              </i>
              <br />helping brands create impactful digital experiences.
              <br />
              My areas of interest include: &nbsp;
              <i>
                <b className="purple">✨ Building data-driven marketing campaigns
📈 Leveraging AI for content creation & automation
 </b> and
 🔍 Optimizing strategies for maximum reach & engagement{" "}
                
              </i>
              <br />
              <br />
              I love exploring the latest <b className="purple"> MarTech tools, paid advertising trends, and growth hacking techniques</b>  to drive business success. Whenever possible, I apply my expertise in <b className="purple">Google Ads, Meta Ads, LinkedIn strategies, and email marketing</b>  automation to craft high-performing campaigns. 
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/magartej07"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/TejMagar_7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tej-thapa-6007a1256/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tej_magar7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
