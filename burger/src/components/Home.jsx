import React from 'react'
import Banner from '../assets/banner.jpg'
import {Link} from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className='mainPage'
     style={{backgroundImage: `url(${Banner})`}}>
      <div className='order'>
        
        <Link to='/menu'>
        
        <button>Sipariş ver</button>
        </Link>
          
      </div>
    </div>
  )
}

export default Home