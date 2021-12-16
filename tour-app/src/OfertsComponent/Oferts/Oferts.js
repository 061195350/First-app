import React from 'react'
import Excursii from '../Excursii/Excursii';
import Exotic from '../Exotic/Exotic';
import Maldive from '../Maldive/Maldive';
import Mountain from '../Montaintours/Mountain';
import Seatour from '../Seatour/Seatour';
import './Oferts.css'

const Oferts = () =>{
    return(
        <div>
           <Seatour />
           <Mountain />
           <Maldive />
           <Excursii />
           <Exotic />
        </div>
    )
}
export default Oferts;