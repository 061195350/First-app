import React from 'react'
import '../Seatour/Seatour.css'
import lac from './lacul-rosu.jpg'
import orh from './orheiul.jpg'
import sor from './soroca.jpg'

const Excursii = () =>{
    return(
        <div>
             <h1 className='Sea-text'>The best Excursion </h1>
            <div className='container'>

            <div className='oferts'>
                    <img src={lac} alt='Lacu-Rosu' />
                <div className='detalii'>
                    <p className='point'>Lacu-Rosu</p>
                    <p className='reducere'> 80 &#8364;</p>
                    <p className='price'>  50 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 07.02.2022 - 10.02.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={orh} alt='Orheiul-Vechi' />
                <div className='detalii'>
                    <p className='point'>Orheiul Vechi</p>
                    <p className='reducere'> 20 &#8364;</p>
                    <p className='price'>  10 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>La data de 05.03.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={sor} alt='Soroca' />
                <div className='detalii'>
                    <p className='point'>Cetatea Sorocii</p>
                    <p className='reducere'> 15 &#8364;</p>
                    <p className='price'>  10 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 07.03.2022</p>
                </div>
            </div>

        </div>
    </div>
    )
}
export default Excursii;