import { Fragment } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Newsletter from './Newsletter'

const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}$id=${process.env.REACT_APP_MAILCHIMP_ID}`

  return (
    <Fragment>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter status={status} message={message} onValidated={(formData: any) => subscribe(formData)} />
        )}
      ></MailchimpSubscribe>
    </Fragment>
  )
}

export default MailchimpForm
