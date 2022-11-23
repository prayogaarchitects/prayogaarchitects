import { useState, useRef } from 'react'

import emailjs from 'emailjs-com'
import { Slide } from 'react-reveal'

export const Contact = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    nameRef.current.value = ''
    emailRef.current.value = ''
    messageRef.current.value = ''
    alert('Form Submitted scucesfully')
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
              <Slide left cascade><h2>Get In Touch</h2></Slide>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form validate action="https://formsubmit.co/prayogaarchitects@gmail.com" onSubmit= {handleSubmit} method="POST">
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input type="text" 
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        ref = {nameRef}/>
                      <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                  <input type="email" 
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        ref = {emailRef}/>
                  <p className='help-block text-danger'></p>
                  </div>
                </div>
              </div>
              <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    ref={messageRef}
                  ></textarea>
                  <p className='help-block text-danger'></p>
              </div>
              <div id='success'></div>
              <button type="submit" className='btn btn-custom btn-lg'>Send</button>
              
              
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
            
          </div>
          <div className='col-md-12'>
            <div className='row'>
            <div >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60906.01492922772!2d78.37529092614186!3d17.429730298518248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91df56fcf7b7%3A0x108ca3c1c6424729!2sPrayoga%20Architects!5e0!3m2!1sen!2sin!4v1666809962370!5m2!1sen!2sin" width="90%" height="50%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 Prayoga Architects. Developed by Vasuprada. Design ideas Template Wire.
          </p>
        </div>
      </div>
    </div>
  )
}
