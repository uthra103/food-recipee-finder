import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div class="footer-wrapper d-flex">

      <div className="footer-container">

        <div class=" col-3 footer-section about">
          <h2 class="logo">Find YOUR <span>FAV</span> <em>Food that make memories</em></h2>
          <p className='text-dark'>
            Appropriately reengineer client-centered ROI rather than alternative technologies.
            Dynamically formulate focused content before market-driven potentialities.
          </p>
        </div>

        <div class=" col-3 footer-section photos">
          <div class="photo-grid">
            <img src="https://wallpapers.com/images/hd/food-4k-spdnpz7bhmx4kv2r.jpg" alt="" />
            <img src="https://th.bing.com/th/id/OIP.StB421WOQ39iRUzNbF3XBQHaHa?w=159&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" alt="" />
            <img src="https://th.bing.com/th/id/OIP.fKnW96c3cV0BPGwtsMGdigHaJQ?w=130&h=150&c=6&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" alt="" />
            <img src="https://th.bing.com/th/id/OIP.g0l3JomvjwntJQ6lTM2_ogHaE1?w=234&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" alt="" />
          </div>
        </div>


        <div class="col-3 footer-section nav">
          <ul>
            <li><a href="#">Meet Us</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Hire Us</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>


        <div class="footer-section social">
          <h3>Social</h3>
          <ul>
            <li><a href="#">Yelp</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <p>
          This is a template designed by Creativity Olive LLC. <br />
          Copyright © your Photographer | Powered by Creativity Olive
        </p>
      </div>
















    </div >
  )
}

export default Footer
