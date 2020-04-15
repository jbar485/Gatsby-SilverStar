import React from "react";
import plane from "../../images/plane.png";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-page">
        <h1 className="contact-header">Contact</h1>
        <p className="description">
          If you want to build the house of your dreams or have your current one
          remodeled Silverstar Construction is the company to call! We look
          forward to the opportunity to cater to your needs and exceed your
          expectations. Trust our experienced home builders to help you achieve
          the results you want.
        </p>
        <div className="information">
          <p className="info">Phone: +1 (360)921-0007</p>
          <p className="info">Email: silverstarhomes20@gmail.com</p>
        </div>
        <div className="formStyles">
          <form
            id="contact-form"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field">

            <input type="hidden" name="form-name" value="contact"/>
            
          
            <input
              className="inputStylesTop"
              type="text"
              name="name"
              placeholder="Name"
            />
          
            <br />
            <input
              className="inputStyles"
              type="email"
              name="email"
              placeholder="Email"
            />
            <br />

            <textarea
              className="inputStylesArea"
              name="message"
              placeholder="Message"
            />
           
            <br />
            <button type="submit" className="btn">
              <img src={plane} alt="Send Mail" className="plane" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;