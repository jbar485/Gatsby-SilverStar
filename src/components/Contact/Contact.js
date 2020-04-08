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
          <p className="info">Address: 4117 NE 232 ST Ridgefield Wa. 98642</p>
        </div>
        <div className="formStyles">
          <form
            id="contact-form"
            data-netlify="true"
            method="POST">
          
            <input
              className="inputStylesTop"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              defaultValue=""
            />
          
            <br />
            <input
              className="inputStyles"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              defaultValue=""
            />
            <br />
            <textarea
              className="inputStylesArea"
              id="message"
              type="textarea"
              name="message"
              placeholder="Message"
              defaultValue=""
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