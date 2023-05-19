import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import quiz from "../../Assets/Projects/quiz.jpg";
import tic from "../../Assets/Projects/tic.jpg";
import calc from "../../Assets/Projects/calc.jpg";
import todo from "../../Assets/Projects/todo.jpg";
import gym from "../../Assets/Projects/gym.jpg";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Some <strong className="purple">Works </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Gym Management System"
              description="The Gym Management system developed using ReactJS is a comprehensive solution designed to streamline and automate various aspects of gym operations. It offers features such as membership management, class scheduling, attendance tracking, billing and payments, and reporting. With an intuitive user interface and robust functionality, the system simplifies administrative tasks, enhances member experience, and improves overall gym management efficiency."
              
              ghLink="https://github.com/ZeeshanAltaf/gym-management"
              demoLink="https://gym-management-xi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce Website"
              description="Our ecommerce website, built with ReactJS, offers a seamless shopping experience. With a user-friendly interface, customers can easily browse through our extensive product catalog, add items to their cart, and securely complete their purchases. Enjoy convenient navigation, responsive design, and efficient functionality, making online shopping a breeze."

              
              ghLink="https://github.com/ZeeshanAltaf/ecommerce-site"
              demoLink="https://ecommerce-site1.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz App"
              description="Introducing my ReactJS-powered quiz app! Engage in exciting quizzes and challenge your knowledge in various subjects. With a sleek and user-friendly interface, you can enjoy seamless navigation while answering a wide range of questions. Track your progress, compete with friends, and unlock achievements as you strive to become the ultimate quiz champion. Get ready to test your brainpower and have a blast!"
              
              ghLink="https://github.com/ZeeshanAltaf/quiz-app"
              demoLink="https://quizapp-za.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tic}
              isBlog={false}
              title="Tic Tac Toe"
              description="My Tic Tac Toe game, built with ReactJS, offers a classic and entertaining gaming experience. Play against a friend or challenge the computer in a battle of X's and O's. The intuitive interface and responsive design provide seamless gameplay across devices. Exercise your strategic skills and aim for victory in this timeless game of tic-tac-toe."
              ghLink="https://github.com/ZeeshanAltaf/tic-tac-toe"
              demoLink="https://tic-tac-toe-za.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-do List"
              description="Introducing a sleek and intuitive to-do list app built with ReactJS. Stay organized and on top of your tasks with ease. Create personalized lists, set due dates, and track your progress effortlessly. With a clean and user-friendly interface, our app simplifies your daily routine, ensuring you never miss a beat. Boost productivity and conquer your to-do list with confidence."
              ghLink="https://github.com/ZeeshanAltaf/todo-list"
              demoLink="https://todo-list-za.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="React Calculator"
              description="The ReactJS Calculator is a user-friendly and efficient application designed to perform basic mathematical calculations. With its sleek and intuitive interface, users can effortlessly add, subtract, multiply, and divide numbers with just a few clicks. Featuring responsive design and smooth functionality, this calculator app provides a convenient solution for quick computations on the go."
              ghLink="https://github.com/ZeeshanAltaf/simple-react-calculator"
              demoLink="https://react-calculator-kappa-neon.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
