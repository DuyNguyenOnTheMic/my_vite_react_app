import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Newsletter from './Newsletter'

const MailchimpForm = () => {
  const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${
    import.meta.env.VITE_REACT_APP_MAILCHIMP_U
  }&id=${import.meta.env.VITE_REACT_APP_MAILCHIMP_ID}`

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <Newsletter status={status} message={message} onValidated={(formData: any) => subscribe(formData)} />
      )}
    ></MailchimpSubscribe>
  )
}

export default MailchimpForm
