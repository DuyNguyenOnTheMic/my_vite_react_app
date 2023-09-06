import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import contactImg from '../assets/img/contact-img.svg'

type statusType = {
  message: string
  success: boolean
}

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState<statusType>({ message: '', success: false })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormDetails(preState => ({ ...preState, [name]: value }))
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    return
  }

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt='Contact Us' />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className='px-1'>
                  <Form.Control
                    type='text'
                    value={formDetails.firstName}
                    placeholder='First Name'
                    onChange={handleChange}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <Form.Control
                    type='text'
                    value={formDetails.lastName}
                    placeholder='Last Name'
                    onChange={handleChange}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <Form.Control
                    type='email'
                    value={formDetails.email}
                    placeholder='Email Address'
                    onChange={handleChange}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <Form.Control type='tel' value={formDetails.phone} placeholder='Phone No.' onChange={handleChange} />
                </Col>
                <Col sm={6} className='px-1'>
                  <Form.Control
                    as='textarea'
                    value={formDetails.message}
                    placeholder='Message'
                    onChange={handleChange}
                    rows={3}
                  />
                  <Button type='submit'>{buttonText}</Button>
                </Col>
                {status.message && (
                  <Col>
                    <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                  </Col>
                )}
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
