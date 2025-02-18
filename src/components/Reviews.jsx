import React from 'react'
import {Card, CardBody, CardText, CardFooter, CardTitle} from 'react-bootstrap'
import './Reviews.css'
import person1 from '../utils/person1.jpg'
import person2 from '../utils/person2.jpg'
import person3 from '../utils/person3.jpg'
import person4 from '../utils/person4.jpg'

const Reviews = () => {
  return (
   <div className='reviews-section container'>
        <h2 className='text-center mb-5 text-uppercase fw-bold fs-1'>Reviews</h2>
        <div className='row g-4'>
            <div className='col-lg-6'>
                <Card className='h-100 shadow'>
                    <CardBody>
                        <div className='p-4'>
                            <CardText>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis animi placeat
                                 aliquam asperiores sunt! Beatae?
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className="d-flex align-items-center">
                        <img src={person1} className='img-fluid rounded-circle mx-3 shadow'/>
                        <CardTitle className="text-success">John Mike</CardTitle>
                    </CardFooter>
                </Card>
            </div>
            <div className='col-lg-6'>
                <Card className='h-100 shadow'>
                    <CardBody>
                        <div className='p-4'>
                            <CardText>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, quasi.
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className="d-flex align-items-center">
                        <img src={person2} className='img-fluid rounded-circle mx-3 shadow'/>
                        <CardTitle className="text-success">Maria Cruz </CardTitle>
                    </CardFooter>
                </Card>
            </div>
            <div className='col-lg-6'>
                <Card className='h-100 shadow'>
                    <CardBody>
                        <div className='p-4'>
                            <CardText>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem soluta, facilis impedit ratione magnam nam tenetur non fuga architecto corporis, iusto tempore nihil reiciendis consectetur a eaque sit officia libero!
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className="d-flex align-items-center">
                        <img src={person3} className='img-fluid rounded-circle mx-3 shadow'/>
                        <CardTitle className="text-success">Slem April</CardTitle>
                    </CardFooter>
                </Card>
            </div>
            <div className='col-lg-6'>
                <Card className='h-100 shadow'>
                    <CardBody>
                        <div className='p-4'>
                            <CardText>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias esse dolores delectus?
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className="d-flex align-items-center">
                        <img src={person4} className='img-fluid rounded-circle mx-3 shadow'/>
                        <CardTitle className="text-success">Nick Brun</CardTitle>
                    </CardFooter>
                </Card>
            </div>
        </div>
   </div>
  )
}

export default Reviews