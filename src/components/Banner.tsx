import { useEffect, useState } from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TrackVisibility from 'react-on-screen'
import headerImg from '../assets/img/header-img.svg'

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer']
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    const i = loopNum % toRotate.length
    const fullText = toRotate[i]
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((preDelta: number) => preDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum => loopNum + 1)
      setDelta(500)
    }
  }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className='tagline'>Welcome to my Portfolio</span>
                  <h1>
                    Hi I'm Duy Nguyen <br /> <span className='wrap'>{text}</span>
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book
                  </p>
                  <button onClick={() => console.log('connect')}>
                    Let's Connect <ArrowRightCircle />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header Image' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
