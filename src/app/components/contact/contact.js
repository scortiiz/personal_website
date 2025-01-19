import './contact.css';
import {SocialIcon} from 'react-social-icons';

const Contact = () => {
    return (
      <section id="contact" >
            <h1 className="ContactHeader">lets connect!</h1>
            <div className="connect"> 
            <div className="contact-icons">
						<SocialIcon url="https://github.com/scortiiz" bgColor="transparent" fgColor="#FFFFFF" className="github" style={{ height: 200, width: 200 }}/>
						<SocialIcon url="https://www.linkedin.com/in/sophia-carazo-ortiz-0884a3242/" bgColor="transparent" fgColor="#FFFFFF" className="linkedin" style={{ height: 200, width: 200 }} />
						<SocialIcon url="https://mail.google.com/mail/u/0/#inbox" network = "email" bgColor="transparent" fgColor="#FFFFFF" className="email" style={{ height: 200, width: 200 }}/>
					</div>
          </div>
      </section>
    );
  };
  
  export default Contact;