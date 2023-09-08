import { Fragment } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Newsletter from './Newsletter'

const MailchimpForm = () => {
  const postUrl = `${import.meta.env.REACT_APP_MAILCHIMP_URL}?u=${import.meta.env.REACT_APP_MAILCHIMP_U}&id=${
    import.meta.env.REACT_APP_MAILCHIMP_ID
  }`

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
