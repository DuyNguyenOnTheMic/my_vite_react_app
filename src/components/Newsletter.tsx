import { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

type NewsletterType = {
  onValidated: any
  status: 'success' | 'sending' | 'error' | null
  message: string | Error | null
}

const Newsletter = ({ onValidated, status, message }: NewsletterType) => {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email
      })
  }
  const clearFields = () => {
    setEmail('')
  }

  useEffect(() => {
    status === 'success' && clearFields
  }, [status])

  return (
    <Col lg={12}>
      <div className='newsletter-bx'>
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter</h3>
            {status === 'sending' && <Alert variant='primary'>Sending...</Alert>}
            {status === 'error' && <Alert variant='danger'>{message}</Alert>}
            {status === 'success' && <Alert variant='success'>{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <Form onSubmit={handleSubmit}>
              <div className='new-email-bx'>
                <Form.Control
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder='Email Address'
                ></Form.Control>
                <Button type='submit'>Submit</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default Newsletter
