import React from "react";
import { useState } from "react";

function Contact() {
  const [data, setData] = useState({ name: "", email: "", phone: "", msg: "" });

  const changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const submitHandler = e => {
    e.preventDefault();
    alert(`
        Name: ${data.name}
        E-Mail: ${data.email}
        Phone No.: ${data.phone}
        Message: ${data.msg}`);
    setData({ name: "", email: "", phone: "", msg: "" });
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="name"
                  value={data.name}
                  onChange={changeHandler}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  E-Mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="email"
                  value={data.email}
                  onChange={changeHandler}
                  placeholder="Enter your E-Mail ID"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="phone"
                  value={data.phone}
                  onChange={changeHandler}
                  placeholder="Mobile No."
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={changeHandler}
                  placeholder="Give us your feedback.."
                />
              </div>

              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div style={{height: '200px'}}></div>
    </>
  );
}

export default Contact;
