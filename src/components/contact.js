import React, { useState } from 'react';

export default () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ response, setResponse ] = useState('');

  const sendMail = (ev) => {
    ev.preventDefault();

    const frm = document.getElementById('email_form');

    const info = {
      name,
      email,
      description
    };

    fetch('/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(response => {
        setResponse(response);
        frm.reset();
      })
      .catch(err => setResponse(err));
  };

  const showResponse = () => {
    if (response) {
      return <div>{response.ok || response.error}</div>;
    }
  };

  return (
    <div className='col-8'>
      <p>Text about getting in touch here.</p>

      {showResponse()}

      <form onSubmit={sendMail} method='post' className='col' id='email_form'>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='quote[name]'
            onChange={ev => setName(ev.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='quote[email]'
            onChange={ev => setEmail(ev.target.value)}
          />
          <small>We will not share your info with anyone!</small>
        </div>

        <div className='form-group'>
          <label htmlFor='description'>Message</label>
          <textarea
            rows={3}
            className='form-control'
            id='message'
            name='quote[message]'
            onChange={ev => setDescription(ev.target.value)}
          />
        </div>

        <button type='submit'>submit</button>
        <div className='g-recaptcha' data-sitekey={`${process.env.CAPTCHA_KEY}`} data-theme='light' />
      </form>
    </div>
  );
};