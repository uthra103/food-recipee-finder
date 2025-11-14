import React from 'react'
import '../components/header.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

// cards
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Home() {



  return (
    <div>
      <div id='home' className="row" style={{ backgroundColor: 'rgb(242, 243, 241)' }} >
        <div className=" head col-6 mt-5 " >
          <h1 style={{ marginTop: '150px', marginLeft: '200px', fontSize: '70px' }}>Adventure <br />of <span>Delicacies</span></h1>
          <p style={{ marginLeft: '200px', fontSize: 'larger' }}>Unlock a world of variety culinary recipes and unleash <br />
            your inner chef the easy way with Flavoriz.</p>
          <div className="buttonnnn d-flex " style={{ marginLeft: '200px' }}>
            <Link to={'register'}>
              <Button className='mx-2' variant="contained" disableElevation style={{ backgroundColor: 'black' }}>
                Add Recipes
              </Button></Link>

            <Link to={'/search'}>   <Button variant="contained" disableElevation style={{ backgroundColor: 'black' }}>
              Explore Recipes
            </Button></Link>

          </div>
        </div>
        <div className="col-6 mt-3"><img src="https://image2url.com/images/1762889313015-a0191970-6c06-4f31-80b6-7bd0f6c8fa87.png" alt="" height={'600px'} width={'800px'} /></div>
      </div>
      <br />



      {/* what you looking for */}
      <div className="whatulooking" id='menu'>
        <h2 className='text-center'>What You Looking For!</h2><br />
        <div className="row food ">
          <div className="col-1"></div>

          <div className="col-1 mx-4"><img style={{ borderRadius: '50%' }} src="https://frommybowl.com/wp-content/uploads/2022/04/One_Pot_Buffallo_Ranch_Pasta_FromMyBowl_Vegan-4-150x150.jpg" alt="" height={'180px'} width={'180px'} /></div>
          <div className="col-1 mx-4"><img style={{ borderRadius: '50%' }} src="https://frommybowl.com/wp-content/uploads/2023/03/Soba_Noodle_Salad_Peanut_Sauce_Vegan_FromMyBowl-7-168x168.jpg" alt="" height={'180px'} width={'180px'} /></div>
          <div className="col-1 mx-4" mx-5><img style={{ borderRadius: '50%' }} src="https://frommybowl.com/wp-content/uploads/2022/12/Chipotle_Black_Bean_Casserole_FromMyBowl-1-168x168.jpg" alt="" height={'180px'} width={'180px'} /></div>
          <div className="col-1 mx-4" ><img style={{ borderRadius: '50%' }} src="https://frommybowl.com/wp-content/uploads/2023/08/Roasted_Red_Pepper_Pasta_Vegan_FromMyBowl-11-168x168.jpg" alt="" height={'180px'} width={'180px'} /></div>

          <div className="col-1 mx-4"><img style={{ borderRadius: '50%' }} src="https://frommybowl.com/wp-content/uploads/2023/12/No_Bake_Chocolate_Pie_Vegan_FromMyBowl-16-168x168.jpg" alt="" height={'180px'} width={'180px'} /></div>
          <div className="col-1 mx-4"><img style={{ borderRadius: '50%' }} src="https://frommybowl.com/wp-content/uploads/2023/04/Strawberry_Overnight_Oats_Vegan_FromMyBowl-15-168x168.jpg" alt="" height={'180px'} width={'180px'} /></div>
          <div className="col-1 mx-4"><img style={{ borderRadius: '50%' }} src="https://frommybowl.com/wp-content/uploads/2025/09/Vegan_Chorizo_Egg_Bites_FromMyBowl-12-368x368.jpg" alt="" height={'180px'} width={'180px'} /></div>
          <div className="col-1"></div>

        </div>
        <div className="row food " style={{ marginLeft: '80px' }}>
          <div className="col-1"></div>

          <div className="foodlook col-1 mx-4" >ONE POT</div>
          <div className="foodlook col-1 mx-4">SALADS</div>
          <div className="foodlook col-1 mx-4" mx-5>DUMB & BAKE</div>
          <div className="foodlook col-1 mx-4" >PASTA</div>

          <div className="foodlook col-1 mx-4">DESSERT</div>
          <div className="foodlook col-1 mx-4">BREAKFAST</div>
          <div className="foodlook col-1 mx-4">EGG MUFFINS </div>

          <div className="col-1"></div>

        </div>
        <br /><br />

      </div>
      {/* popular food recipes */}
      <h2 className='text-center'>Most Popular <span>Food Recipe</span></h2><br />
      <div className="row mx-5 ">

        <div className="col-1"></div>
        <div className=" col-2 mx-5" style={{ marginLeft: '-50px' }}> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://frommybowl.com/wp-content/uploads/2019/10/Buffalo_Chickpea_Casserole_Vegan_Dump_And_Bake-12-368x368.jpg" />
          <Card.Body>
            <Card.Title className="foodlook ">Buffalo Cauliflower & Chickpea Casserole</Card.Title>
            <Card.Text>
              This dump-and-bake Buffalo Cauliflower & Chickpea Casserole is cozy and hearty, plus you only need 10 ingredients to make it! Naturally Vegan & Gluten-Free.
            </Card.Text>
          </Card.Body>
        </Card></div>

        <div className="col-2 mx-4 " > <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://frommybowl.com/wp-content/uploads/2024/12/Lemongrass_Tofu_Vegan_FromMyBowl-14-268x268.jpg" />
          <Card.Body>
            <Card.Title className="foodlook ">Lemongrass Tofu</Card.Title>
            <Card.Text>
              This Vietnamese-inspired Lemongrass Tofu Recipe tosses fried tofu in a vibrant, citrusy, and savory lemongrass sauce. The infusion of South Asian flavors makes this dish a winning easy.
            </Card.Text>

          </Card.Body>
        </Card></div>

        <div className="col-2 mx-5"> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://frommybowl.com/wp-content/uploads/2017/11/0J9A1127-585x585.jpg" />
          <Card.Body>
            <Card.Title className="foodlook ">Vegan Mushroom Stroganoff (One Pot)</Card.Title>
            <Card.Text>
              This Vegan Mushroom Stroganoff is just as satisfying as traditional beef stroganoff yet made with healthy plant-based ingredients. This creamy pasta is guaranteed.
            </Card.Text>
          </Card.Body>
        </Card></div>
        <div className="col-2 mx-4"> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://frommybowl.com/wp-content/uploads/2023/03/Soba_Noodle_Salad_Peanut_Sauce_Vegan_FromMyBowl-13-368x368.jpg" />
          <Card.Body>
            <Card.Title className="foodlook ">Soba Noodle Salad with Peanut Sauce</Card.Title>
            <Card.Text >
              This Soba Noodle Salad with Peanut Sauce gives you a flavorful and satisfying option for meal prep or a light dinner in just 20 minutes! You’ll love the chewy soba noodles.</Card.Text>
          </Card.Body>
        </Card></div>
        <div className="col-1"></div>
      </div >

      <br /><br /><br />

    </div >
  )
}

export default Home
