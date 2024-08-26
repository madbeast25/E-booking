import Head from "./Head"
import { Link } from "react-router-dom"
import Foot from "./Foot"
import x from "../assets/logos.png"
import whats from "../assets/whatsapp.png"
import insta from '../assets/instagram (1).png'
import mail from "../assets/gmail.png"
import phone from "../assets/phone.png"

function Contact(){
    return(
        <>
        <Head />
        <div className="contact-container">
  <div className="contact-us">
     <h1>Thanks for using 2K E-Services</h1>
     <h1>To contact us</h1>
     <div className="contact">
       <h4>@2K_Solutions in Twitter</h4>
       <Link to="https://x.com/Solutions2K"><img src={x} className="contact-img"/></Link>
     </div>
     <div className="contact">
        <h4>2ksolutions2k10@.com in G-mail</h4>
        <Link to="mailto:2ksolutions2k10@.com"><img src={mail} className="contact-img" /></Link>
      </div>
      <div className="contact">
        <h4>Contact number</h4>
        <Link to="tel:+919500760045"><img src={phone} className="contact-img" /></Link>
      </div>
      <div className="contact">
        <h4>2ksolutions2024 in instagram</h4>
        <Link to="https://www.instagram.com/2ksolutions2024"><img src={insta} className="contact-img" /></Link>
      </div>
      <div className="contact">
        <h4>Whatsapp link</h4>
        <Link to="https://x.com/Solutions2K"><img src={whats} className="contact-img" /></Link>
      </div>
  </div>
</div>
<Foot />
        </>

    )
}
export default Contact