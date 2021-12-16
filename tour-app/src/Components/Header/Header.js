import React from 'react'
import logo from './logo4.png';
import  './Header.css'
import { NavLink } from 'react-router-dom';

function  open(event) {
    console.log(event);
    if(event.target.nodeName !=='SPAN') return;
    event.target.nextElementSibling.classList.toggle('sub-menu-active');
}

function closeAllSubMenu(current = null){
    
    let parents = [];
    if(current){
        
        let currentParent = current.parentNode;
        while(currentParent){
            if(currentParent.classList.contains('root-nav')) break;
            if(currentParent.nodeName === 'UL') parents.push(currentParent);
            currentParent = currentParent.parentNode;
        }
    }   
    
    const subMenu = document.querySelectorAll('.root-nav ul');
    Array.from(subMenu).forEach(item => {
        if(item != current && !parents.includes(item)) item.classList.remove('sub-menu-active')});
        
}

const Header = () =>{
    return(
        <div className='header'>
         <div className='container'>
        <div className='nav-wrapper'>
            <div className='logo'>
                 <img src={logo} />
            </div>

        <ul class="root-nav" onMouseOver={open} onChange={ closeAllSubMenu}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><span>Mare</span>
            <ul>
                <li><a href="#">Egipt</a></li>
                <li><a href="#">Dubai</a></li>
                <li><a href="#">Turcia</a></li>
                <li><a href="#">Muntenegru</a></li>
                <li><a href='#'>Exotic</a></li>
            </ul>
        </li>

        <li><a href="#">Bilete de Avion</a></li>
        <li><NavLink to='/oferts' >Oferte </NavLink></li> 
       {/*  <li><a id='link' to='/oferts'>Oferte</a></li> */}
         <li><a href="#">Excursii</a></li>
        
        <li>
            <span>Munte</span>
            <ul>
                <li><a href="#">Romania</a></li>
                <li><a href="#">Ucraina</a></li>
                <li><a href="#">Franta</a></li>
            </ul>
        </li>
    </ul>
        </div>
      </div>
    </div>
    )
}
export default Header;