import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_55szp1f",
        "template_zr3lbth",
        form.current,
        "user_plbIvMqJxZ89dXZId9aSI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact pt-5 py-5 containerStyle">
      <div className="container">
        <div className="section-header text-center text-white mb-5">
          <h5 className="text-brand">Contact</h5>
          <h1>Always connect with us</h1>
        </div>
        <div className="col-md-9 mx-auto">
          <form action="" ref={form} onSubmit={sendEmail}>
            <div className="form-group mb-3">
              <input
                type="text"
                name="from_name"
                className="form-control"
                placeholder="Enter Name *"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="to_name"
                className="form-control"
                placeholder="Enter Email *"
              />
            </div>
            <div className="form-group mb-3">
              <textarea
                name="message"
                className="form-control"
                id=""
                cols="30"
                rows="10"
                placeholder="Enter Message *"
              ></textarea>
            </div>
            <div className="form-group text-center">
              <button type="submit" value="Send" className="btn btn-brand">
                {" "}
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
