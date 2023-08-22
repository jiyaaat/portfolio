import React from 'react';
import './Contact.css';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <h1>Contact me</h1>

      <div className='contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <div className='contact_card'>
              <EmailIcon />
              <h4>Email</h4>
              <h5>jt2779@srmist.edu.in</h5>
              <a href='mailto:jt2779@srmist.edu.in'>send me a message</a>
            </div>
          </article>
          <article className='contact_option'>
            <div className='contact_card'>
              <InstagramIcon />
              <h4>Instagram</h4>
              <h5>jiya_thakur17</h5>
              <a href='https://www.instagram.com/'>send me a message</a>
            </div>
          </article>
          <article className='contact_option'>
            <div className='contact_card'>
              <WhatsAppIcon />
              <h4>WhatsApp</h4>
              <h5>+917225989991</h5>
              <a href='https://api.whatsapp.com/send?phone+917225989991'>
                send me a message
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
