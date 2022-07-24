import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
     <div className="header">
        <div className="header__left">
          
            <h3 className='titleof'>EpicPlayz</h3>
            
            <img src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c"
                alt="" />
        </div>

        <div className="header__search">
            <form action="">
                <input type="text" placeholder="Search" />
                <button><i className="material-icons">search</i></button>
            </form>
        </div>
        
        <div className="header__icons">
           
           <Link to="/"><i className="material-icons">videocam</i></Link> 
            
           <Link to="/login"> <i className="material-icons display-this">login</i> </Link>
            
        </div>
    </div>

    </>
  )
}
