import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import contactImg from '../assets/img/contact-img.svg'

type ResponseStatusType = {
  success: boolean
  message: string
}

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
}

const Contact = () => {
  const [formDetails, setFormDetails] = useState(initialState)
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState<ResponseStatusType>({ message: '', success: false })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormDetails(preState => ({ ...preState, [name]: value }))
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setButtonText('Sending...')
    const response = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json;charset=utf-8'
      },
      body: JSON.stringify(formDetails)
    })
    setButtonText('Send')
    const result = await response.json()
    setFormDetails(initialState)
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message send successfully! 😊' })
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later! 😥' })
    }
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
