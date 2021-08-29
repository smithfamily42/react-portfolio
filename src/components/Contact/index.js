import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <form id="contact-form" className="m-auto" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label" htmlFor="name">Name:</label>
          <div className="col-sm-8">
            <input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label" htmlFor="email">Email address:</label>
          <div class="col-sm-10">
            <input
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label" htmlFor="message">Message:</label>
          <div class="col-sm-10">
            <textarea
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
        </div>

        {errorMessage && (
          <div>
            <p className="mx-auto error-text">{errorMessage}</p>
          </div>
        )}

        <div>
          <button className="col-sm-2" type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
