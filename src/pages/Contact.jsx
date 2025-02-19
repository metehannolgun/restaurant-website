import React from 'react'
import '../pages/Contact.css'
import ContactInfo from '../components/ContactInfo'
import  {Form} from 'react-bootstrap'
import Reviews from '../components/Reviews'

const Contact = () => {
  return (
    <div className='contact-page'>
        <header className='mt-5'>
            <div className='container h-100 d-flex align-items-center
            justify-content-center'>
                <h1 className='text-light'>
                    Contact
                </h1>
            </div>
        </header>
        <div className='container my-5'>
            <div className='row'>
                <div className='col-lg-6 d-flex align-items-center
                justify-content-center'>
                    <ContactInfo />
                </div>
                <div className='col-lg-6 d-flex align-items-center
                justify-content-center'> 
                    <Form>
                      <Form.Group className='row mb-3'>
                        <div className='col-md-6'>
                          <Form.Label htmlFor='first-name'>First Name

                          </Form.Label>
                          <Form.Control type='text' id='first-name' />
                        </div>
                        <div className='col-md-6'>
                          <Form.Label htmlFor='last-name'>Last Name

                          </Form.Label>
                          <Form.Control type='text' id='last-name' />
                        </div>
                      </Form.Group>
                      <Form.Group className='row mb-3'>
                        <div className='col-md-6'>
                          <Form.Label htmlFor='email-address'>Email Address

                          </Form.Label>
                          <Form.Control type='email' id='email-address' />
                        </div>
                        <div className='col-md-6'>
                          <Form.Label htmlFor='phone'>Phone Number

                          </Form.Label>
                          <Form.Control type='tel' id='phone-number' />
                        </div>
                      </Form.Group>
                      <Form.Group className='row mb-3'>
                        <div className='col-md-6'>
                          <Form.Label htmlFor='date'>Date

                          </Form.Label>
                          <Form.Control type='date' id='date' />
                        </div>
                        <div className='col-md-6'>
                          <Form.Label htmlFor='guest-number'>Number of Guest

                          </Form.Label>
                          <Form.Control type='number' id='guest-number' />
                        </div>
                      </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
        <div className='bg-dark text-light py-5'>
            <Reviews />
        </div>
    </div>
  )
}

export default Contact