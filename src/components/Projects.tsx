import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import TrackVisibility from 'react-on-screen'
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Business Startup',
    description: 'Design & Development',
    imgUrl: projImg1
  },
  {
    title: 'Business Startup',
    description: 'Design & Development',
    imgUrl: projImg2
  },
  {
    title: 'Business Startup',
    description: 'Design & Development',
    imgUrl: projImg3
  }
]

const Projects = () => {
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Tab One</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>Tab Three</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>Lorem Ipsum</Tab.Pane>
                      <Tab.Pane eventKey='third'>Lorem Ipsum</Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} />
    </section>
  )
}

export default Projects
