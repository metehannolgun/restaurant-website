import React from 'react'
import './About.css'
import Aboutchef1 from '../utils/chef1.jpg'
import Aboutchef2 from '../utils/chef2.jpg'
import ImageGalerry from '../components/ImageGalerry'
import Reviews from '../components/Reviews'


const About = () => {
  return (
    <div className='about-page'>
        <header className='mt-5'>
          <div className='container h-100 d-flex align-items-center justify-content-center'>
            <h1 className='text-light'>
              About
            </h1>
          </div>
        </header>
        <div className='container my-5'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Aliquid ex, molestias mollitia quod modi molestiae delectus blanditiis magnam? Aperiam cupiditate vero,
               laboriosam sequi inventore vitae provident adipisci modi libero dolorum sed iste repellat consectetur sint,
                quod ducimus iusto aspernatur natus officiis architecto? Veniam aut minima obcaecati neque molestiae perspiciatis iste ab laborum,
                 adipisci, nemo ad, consequatur placeat. Minus, esse maxime.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsa assumenda. 
              At autem voluptate quos reiciendis quis fugiat eum recusandae dicta molestias excepturi natus maiores doloribus,
               aliquam facilis minima magnam ab? Illo, ea dolores officiis expedita excepturi mollitia molestiae fugiat distinctio qui cupiditate doloribus possimus deserunt ut, 
               nemo doloremque ipsa nihil tenetur aut. Doloribus deserunt excepturi saepe repellat illo similique et, impedit numquam animi ipsa nobis vero aliquid fugit, 
               eum accusantium modi temporibus, suscipit qui aspernatur expedita culpa! Facilis, voluptate!
            </p>
            <div className='row'>
                    <div className='col-lg-6'>
                        <img src={Aboutchef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={Aboutchef2} className='img-fluid my-4' alt="" />
                    </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel provident vitae sint cumque dolore voluptate officiis itaque omnis,
                 corrupti unde qui libero ducimus enim in sapiente sequi quibusdam nostrum nulla officia aut nisi tenetur,
                  laudantium iusto! Tempore culpa aliquam eligendi, perspiciatis exercitationem eveniet, 
                  cumque nesciunt laboriosam et debitis commodi ipsum esse rerum neque sequi veritatis aspernatur repudiandae possimus magnam harum voluptas ut? 
                  Sapiente quam porro dicta quibusdam earum illo dolores ad aliquid aspernatur, voluptate architecto adipisci, ipsam assumenda eum modi.
              </p>
        </div>
        <div className='bg-dark text-light'>
            <ImageGalerry />
        </div>
        <div className='my-5'>
            <Reviews />
        </div>
    </div>
  )
}

export default About