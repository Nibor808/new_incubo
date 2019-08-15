import React, { useState } from 'react';

export default () => {
  const [ fName, setFName ] = useState('');
  const [ lName, setLName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ response, setResponse ] = useState('');

  const sendMail = (ev) => {
    ev.preventDefault();

    const frm = document.getElementById('email_form');

    const info = {
      fName,
      lName,
      email,
      description
    };

    fetch('/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    }).then(res => res.json())
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
    <section className='contact'>
      <article className='row'>
        <div className='col-7'>
          <h4>
            Have a Project you would like to discuss with us?
          </h4>

          {showResponse()}

          <form onSubmit={sendMail} method='post' className='col' id='email_form'>
            <div className='form-group'>
              <label htmlFor='fName'>First Name</label>
              <input
                type='text'
                className='form-control'
                id='fName'
                name='quote[fName]'
                onChange={ev => setFName(ev.target.value)}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='lName'>Last Name</label>
              <input
                type='text'
                className='form-control'
                id='lName'
                name='quote[lName]'
                onChange={ev => setLName(ev.target.value)}
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
              <label htmlFor='description'>A short description of your project</label>
              <textarea
                rows={3}
                className='form-control'
                id='description'
                name='quote[description]'
                onChange={ev => setDescription(ev.target.value)}
              />
            </div>

            <button type='submit'>submit</button>
            <div className='g-recaptcha' data-sitekey='6LeEyAoUAAAAAE9Q2bEH_OvvcacIsDs3uBblmyZ2' data-theme='light' />
          </form>
        </div>
      </article>
    </section>
  );
};