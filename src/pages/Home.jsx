import React from 'react'
import MenuBtn from '../components/MenuBtn'
import '../pages/Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='home-page'>
      <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 d-flex d-sm-block flex-column aling-items-center'>
              <h2 className='mb-0 text-black fw-bold'>
                Welcome To

              </h2>
              <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>
                React Restaurant
                <MenuBtn />

              </h1>

            </div>

          </div>

        </div>

      </header>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-5 d-flex justify-content-center d-none d-lg-flex'>
            <img src="" className='img fluid w-50'
            alt='about img'
             />

          </div>
          <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
            <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur voluptatibus quod laborum eos ullam dicta. Consequuntur dolorum rem repellat corrupti ullam ut accusantium doloremque quas nobis sint. Officiis nemo reprehenderit nisi placeat deleniti. Harum, debitis odio. Necessitatibus fugiat, labore alias reprehenderit tempore quo! Maxime atque similique, porro ratione ab nemo?</p>
            <p className='mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, voluptate debitis. Repellendus aliquid error enim ipsam consequuntur cumque molestiae accusantium quia, nemo voluptas quam esse natus quaerat eligendi inventore nulla nihil officiis. Consectetur quo delectus molestias soluta quaerat odit et repudiandae! Fugit ipsum repellat mollitia? Dolor doloremque sapiente sed architecto?</p>
            <Link to='/about'>
                <button type='button' className='btn btn-outline-success btn-lg'>
                  More About Us
                  </button>
            </Link>
          </div>

        </div>
      </div>
      <div className='menu-section py-5 text-light shadow'>
        <div className='container d-flex flex-column align-items-center'>
          <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
          <div className='row mb-5 w-100'>
            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
              <h3 className='fs-2 mb-5'>Food</h3>
              <ul className='px-0'>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Turkish Breakfast</p>
                  <p className='fs-3 mx-2 text-success fw-nold'>10£</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Spicy Beef</p>
                  <p className='fs-3 mx-2 text-success fw-nold'>15£</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Spaghetti Bolognese</p>
                  <p className='fs-3 mx-2 text-success fw-nold'>11£</p>
                </li>

              </ul>

            </div>
            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
              <h3 className='fs-2 mb-5'>Drinks</h3>
              <ul className='px-0'>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Turkish Tea</p>
                  <p className='fs-3 mx-2 text-success fw-nold'>1.5£</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Coffe</p>
                  <p className='fs-3 mx-2 text-success fw-nold'>2£</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Orange Juice</p>
                  <p className='fs-3 mx-2 text-success fw-nold'>3.5£</p>
                </li>

              </ul>

            </div>

          </div>
          <MenuBtn />

        </div>

      </div>


    </div>
  )
}

export default Home