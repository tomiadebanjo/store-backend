import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const message = email => ({
  to: email,
  from: 'hello@exp-store.com',
  subject: 'Order Confirmation Email',
  text: 'Your Order has been confirmed',
  html: '<p>We have received your order and We will be processing it shortly.</p>',
});

class EmailUtil {
  static sendConfirmationMail({ email }) {
    const msg = message(email);
    sgMail.send(msg);
  }
}

export default EmailUtil;
