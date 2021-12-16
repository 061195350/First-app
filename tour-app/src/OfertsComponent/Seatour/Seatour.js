import React from 'react'
import './Seatour.css'
import bul from './Bulgaria.jpg'
import Egipt from './Egipt.jpg'
import mon from './Monaco.jpg'
import rom from './Rom.jpg'
import  santorini from './Santorini.jpg'
import tur from './Turkey.jpg'
import ukr from './Ucraina.jpg'


const Seatour = () => {
    return(
        <div className='SeaTour'>
            <div >
                <h1 className='Sea-text'>The best Sea Tours</h1>
            <div className='container'>

            <div className='oferts'>
                    <img src={bul} alt='Egipt' />
                <div className='detalii'>
                    <p className='point'>Bulgaria</p>
                    <p className='reducere'> 150 &#8364;</p>
                    <p className='price'>  100 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 07.05.2022 - 15.05.2022</p>
                </div>
                </div>

                <div className='oferts'>
                    <img src={Egipt} alt='Egipt' />
                <div className='detalii'>
                    <p className='point'>Egipt</p>
                    <p className='reducere'> 200 &#8364;</p>
                    <p className='price'>  160 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 01.01.2022 - 07.01.2022</p>
                </div>
                </div>

                <div className='oferts'>
                    <img src={mon} alt='Monaco' />
                <div className='detalii'>
                    <p className='point'>Monaco</p>
                    <p className='reducere'> 500 &#8364;</p>
                    <p className='price'>  460 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 07.04.2022 - 15.04.2022</p>
                </div>
                </div>

                <div className='oferts'>
                    <img src={rom} alt='Romania' />
                <div className='detalii'>
                    <p className='point'>Romania</p>
                    <p className='reducere'> 200 &#8364;</p>
                    <p className='price'>  160 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 15.05.2022 - 20.05.2022</p>
                </div>
                </div>

                <div className='oferts'>
                    <img src={tur} alt='Turkey' />
                <div className='detalii'>
                    <p className='point'>Turkey</p>
                    <p className='reducere'> 250 &#8364;</p>
                    <p className='price'>  200 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 20.04.2022 - 01.05.2022</p>
                </div>
                </div>

                <div className='oferts'>
                    <img src={santorini} alt='Sanotirini' />
                <div className='detalii'>
                    <p className='point'>Santorini</p>
                    <p className='reducere'> 400 &#8364;</p>
                    <p className='price'>  360 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 20.04.2022 - 01.05.2022</p>
                </div>
                </div>

                <div className='oferts'>
                    <img src={ukr} alt='Ucraina' />
                <div className='detalii'>
                    <p className='point'>Ucraina</p>
                    <p className='reducere'> 80 &#8364;</p>
                    <p className='price'>  60 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 07.05.2022 - 15.05.2022</p>
                </div>
                </div>

            </div>
            </div>
        </div>
    )
}
export default Seatour;