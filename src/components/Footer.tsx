import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import MailchimpForm from './MailchimpForm'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt='Logo' />
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a href=''>
                <img src={navIcon1} alt='' />
              </a>
              <a href=''>
                <img src={navIcon2} alt='' />
              </a>
              <a href=''>
                <img src={navIcon3} alt='' />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
