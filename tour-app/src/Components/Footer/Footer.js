import React from 'react'
import './Footer.css'
import facebook from './facebook1.jpg'
import instagram  from './instagram1.jpg'
import youtube from './youtube1.jpg'
import twitter from './twitter1.jpg'
import location from './location.jpg'
import maps from './maps.jpg'
import call from './call.jpg'
import email from './email.jpg'
const Footer = () => {
    return(
        <div className='footer'>
            <div className='container'>

               
            <div className='icon'>
                    <img src={facebook}  width='180px'/>
                    <img src={instagram} width='180px' />
                    <img src={youtube}   width='180px' />
                    <img src={twitter}   width='180px' />
                </div>

               <div className='icon-footer'>
               <img src={location} alt='location' />
               <p className='txt'>Orasul: Chisinau</p>
               </div><br></br>
               <div className='icon-footer'>
                <img src={maps} alt='maps'/>
               <p className='txt'>Adresa: str.Miron Costin 26/7</p>
               </div><br></br>
                <div className='icon-footer'>
                <img src={call} alt='phone' />
                <p className='txt'>Nr de telefon: 06228975</p>
                </div><br></br>
               <div className='icon-footer'>
                <img src={email} alt='email' />
               <p className='txt'>Adresa de email: SkyTravel@gmail.com</p>
               </div>
            </div>
        </div>
    )
}
export default Footer;