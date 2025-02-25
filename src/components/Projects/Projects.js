import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Credit Card"
              description="A Card Project for banking involves the design, development, and implementation of debit and credit card systems for financial institutions..."
              ghLink="https://vercel.com/magar-tejs-projects/card-web"
              demoLink="https://tej-magar-card-web-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blog Card"
              description="A **Blog Card** is a UI component that showcases blog posts with an image, title, and summary, enhancing readability and user engagement."
              ghLink="https://vercel.com/magar-tejs-projects/blog-card"
              demoLink="https://blog-card-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Social Link"
              description="**Social Link** is a sleek and modern platform that lets you showcase and share all your important links in one place, making it easy to connect with your audience. 🚀"
              ghLink="https://vercel.com/magar-tejs-projects/social-link"
              demoLink="https://social-link-puce.vercel.app/"              
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
