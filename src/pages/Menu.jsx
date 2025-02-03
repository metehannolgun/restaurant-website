import React from 'react'
import '../pages/Menu.css'
import {Card, CardBody, CardText, CardTitle} from 'react-bootstrap'
import BreakFastImg from '../utils/breakfast.jpg'
import LunchImg from '../utils/lunch.jpg'
import DinnerImg from '../utils/dinner.jpg'
import DessertImg from '../utils/dessert.jpg'



const breakfast=[
  {
  id: 1,
  name:'English Breakfast',
  description: 'sausages, tomato, mushrooms, black pudding and eggs',
  price:'£12'
  },
  {
    id: 2,
    name:'Avocado Toast',
    description: 'poached eggs, avocado, onion, tomatoes, bread',
    price:'£8'
  },
  {
    id: 3,
    name:'Burrito',
    description: 'tortilla wrap with beans, rice, cheese, and salsa',
    price:'£10'
  }

]



const Menu = () => {
  return (
    <div className='menu-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center
        justify-content-center'>
          <h1 className='text-light'>Menu</h1>
        </div>
      </header>
    </div>
  )
}

export default Menu