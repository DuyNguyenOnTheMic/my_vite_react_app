import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>
              Hi I'm Duy Nguyen<span className='wrap'>Web Developer</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book
              </p>
            </h1>
            <button onClick={() => console.log('connect')}>Let's Connect</button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={''} alt='Header Image' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
