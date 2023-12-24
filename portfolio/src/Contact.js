import React from 'react';
import './Contact.css';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
              <h5>jiyat525@gmail.com</h5>
              <a href='mailto:jiyat525@gmail.com'>send me a message</a>
            </div>
          </article>
          <article className='contact_option'>
            <div className='contact_card'>
              <LinkedInIcon />
              <h4>Linkedin</h4>
              <h5>jiya-thakur-7ab971251</h5>
              <a href='https://www.linkedin.com/in/jiya-thakur-7ab971251/'>send me a message</a>
            </div>
          </article>
          <article className='contact_option'>
            <div className='contact_card'>
              <GitHubIcon />
              <h4>Github</h4>
              <h5>jiyaaat</h5>
              <a href='https://github.com/jiyaaat'>send me a message</a>
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
