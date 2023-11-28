import React , { useState } from "react";
import "../Header/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
import { CgShoppingBag } from "react-icons/cg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

const Header = () => {

    const [menu,setmenu] = useState("top");

    return (
    <div className="header-page">
    <div id="top-row">
    <FontAwesomeIcon id="search" icon={faMagnifyingGlass} />    
    <Link to="/"><img id="refresh" src={require('../images/refreshimg.avif')} /></Link>

    <div class="btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      <CgShoppingBag id="cart" size={25} />
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
      <h5 class="offcanvas-title slidecart" id="offcanvasRightLabel">Your cart is empty</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body"></div>
      </div>
      <div className="cart-count">0</div>
    </div>
    </div>
    
    <ul className="nav-menu">
    <li onClick={()=>{setmenu("hair")}} className="links"><Link className="nav-link" to="/Hair">Hair{menu==="hair"?<hr/>:<></>}</Link></li>
    <li onClick={()=>{setmenu("body")}} className="links"><Link className="nav-link" to="/Body">Body{menu==="body"?<hr/>:<></>}</Link></li>
    <li onClick={()=>{setmenu("face")}} className="links"><Link className="nav-link" to="/Face">Face{menu==="face"?<hr/>:<></>}</Link></li>
    <li onClick={()=>{setmenu("kits")}} className="links"><Link className="nav-link" to="/Kits">Kits{menu==="kits"?<hr/>:<></>}</Link></li>
    <ul className="navbar-nav">
            <li className="links">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
            </a>
            <ul className="dropdown-menu list-view" aria-labelledby="navbarDropdownMenuLink">
                <li className="dropdown-list"><Link className="sub-link" to="/Ourstory">Our story</Link></li>
                <li className="dropdown-list"><Link className="sub-link" to="/Blog">Blog</Link></li>
                <li className="dropdown-list"><Link className="sub-link" to="/Contact">Contact</Link></li>
            </ul>
            </li>
    </ul>
    </ul>
    </div>
    )
}

export default Header;