import React, { useState } from 'react';
import validateForm from '../utils/validate_form';

export default () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ response, setResponse ] = useState('');
  const [ error, setError ] = useState('');
  const [ nameErrorBorder, setNameErrorBorder ] = useState('');
  const [ emailErrorBorder, setEmailErrorBorder ] = useState('');
  const [ messageErrorBorder, setMessageErrorBorder ] = useState('');

  const sendMail = async (ev) => {
    ev.preventDefault();

    const frm = document.getElementById('email-form');

    const frmError = await validateForm(name, email, message);

    const ERROR_BORDER = '1px solid red';

    if (frmError) {
      switch (frmError.type) {
        case 'name':
          setNameErrorBorder(ERROR_BORDER);
          break;
        case 'email':
          setEmailErrorBorder(ERROR_BORDER);
          break;
        case 'message':
          setMessageErrorBorder(ERROR_BORDER);
          break;
        default:
          setNameErrorBorder('');
      }

      return setError(frmError.error);
    }

    const info = {
      name,
      email,
      message
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

        setTimeout(() => {
          setResponse('');
        }, 3000);
      })
      .catch(err => setResponse(err));
  };

  const showResponse = () => {
    if (response) {
      return response.error ? <p className='error'>{response.error}</p> :
        <p className='success'>{response.ok}</p>;
    }
  };

  const clearError = () => {
    setError('');
    setNameErrorBorder('');
    setEmailErrorBorder('');
    setMessageErrorBorder('');
  };

  return (
    <div className='row'>
      <div className='col-1 col-md-1 sidebar' />
      <div className='col-11 col-md-6'>
        {error ? <p className='error'>{error}</p> : null}

        {showResponse()}

        <form onSubmit={sendMail} method='post' id='email-form'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='quote[name]'
              onChange={ev => {
                setName(ev.target.value);
                clearError();
              }}
              style={{ border: nameErrorBorder }}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              name='quote[email]'
              onChange={ev => {
                setEmail(ev.target.value);
                clearError();
              }}
              style={{ border: emailErrorBorder }}
            />
            <small>We will not share your info with anyone. Full stop.</small>
          </div>

          <div className='form-group'>
            <label htmlFor='description'>Message</label>
            <textarea
              rows={3}
              className='form-control'
              id='message'
              name='quote[message]'
              onChange={ev => {
                setMessage(ev.target.value);
                clearError();
              }}
              style={{ border: messageErrorBorder }}
            />
          </div>

          <button type='submit'>Send</button>
          <div className='g-recaptcha' data-sitekey={`${process.env.CAPTCHA_KEY}`} data-theme='light' />
        </form>
      </div>
    </div>
  );
};