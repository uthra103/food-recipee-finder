import React from 'react'
import Card from 'react-bootstrap/Card';
function Contact() {
  return (
    <div>
      <div className="about text-center">
        <h1><span>About</span>Us </h1>
        <p className='head'> Discover how Dish Discover turns your everyday ingredients into mouth-watering meals.
          Your next favorite recipe is just a few clicks away!r</p>
      </div>


      <div className="main-about p-3 m-3 " style={{ border: "2px solid lightgray" }}>
        {/* about */}
        <div className="row ms-5">

          <div className="col-1"></div>
          <div className="col-2 mx-3"> <Card style={{ width: '18rem', backgroundColor: 'white', border: 'none' }}>
            <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/professional-chef-choosing-spices-mid-section-portrait-professional-chef-choosing-aromatic-spices-cooking-restaurant-141661273.jpg" width={'200px'} height={'200px'} />
            <Card.Body>
              <Card.Title className="foodlook ">Collect Incrediance</Card.Title>
              <Card.Text>
                Just tell me what’s already in your kitchen.
                From a few simple ingredients, we’ll spark endless culinary possibilities!
              </Card.Text>
            </Card.Body>
          </Card></div>

          <div className="col-2 mx-3"> <Card style={{ width: '18rem', backgroundColor: 'white', border: 'none' }}>
            <Card.Img variant="top" src="https://arvadavillapizzeria.com/wp-content/uploads/2024/07/Arvada-Villa-Good-Meals.jpg" width={'200px'} height={'200px'} />
            <Card.Body>
              <Card.Title className="foodlook ">Find your Taste</Card.Title>
              <Card.Text>
                Craving something spicy, creamy, or comforting?
                I’ll tune into your mood and flavor preferences to match recipes you’ll truly love.
              </Card.Text>

            </Card.Body>
          </Card></div>

          <div className="col-2 mx-3"> <Card style={{ width: '18rem', backgroundColor: 'white', border: 'none' }}>
            <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1200/1*TikfGZrQJCE87XN8JlT-eQ.jpeg" width={'200px'} height={'200px'} />
            <Card.Body>
              <Card.Title className="foodlook ">Provide Recipes</Card.Title>
              <Card.Text>
                No more endless scrolling for what to cook next.
                Get clear, step-by-step recipes crafted from what you already have — fast and simple!
              </Card.Text>
            </Card.Body>
          </Card></div>
          <div className="col-2 mx-3"> <Card style={{ width: '18rem', backgroundColor: 'white', border: 'none' }}>
            <Card.Img variant="top" src="https://frommybowl.com/wp-content/uploads/2023/03/Soba_Noodle_Salad_Peanut_Sauce_Vegan_FromMyBowl-13-368x368.jpg" width={'200px'} height={'200px'} />
            <Card.Body>
              <Card.Title className="foodlook ">Teach how to cook</Card.Title>
              <Card.Text >
                Cooking made easy and enjoyable, every step of the way.
                Your smart kitchen buddy — guiding you from ingredients to delicious perfection!</Card.Text>
            </Card.Body>
          </Card></div>
          <div className="col-1"></div>
        </div >

        {/* about -para */}

        <Card body style={{ width: '90%', marginLeft: '100px', backgroundColor: 'white', border: 'none' }}>
          Hi there!  Ready to awaken your inner chef? At Dish Discover, we make cooking simple, smart, and exciting! Just tell us the ingredients you already have at home, and we’ll help you create something delicious in minutes.

          Our intelligent recipe finder suggests dishes that perfectly match your available ingredients, cooking time, and personal taste preferences — so you can spend less time deciding and more time enjoying your food.
          Whether you’re a beginner experimenting in the kitchen or a food lover looking for new inspirations, Dish Discover is your personal cooking companion. From quick snacks to hearty meals, we help you discover recipes that bring flavor, creativity, and joy to your table.

          So, let’s get started — input your ingredients, and let the magic begin! </Card>
      </div>





    </div >
  )
}

export default Contact
