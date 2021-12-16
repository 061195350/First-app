import React from 'react'
import '../Seatour/Seatour.css'
import bra from './brazil.jpg'
import mex from './Cancun.jpg'
import Cuba from './Cuba.jpg'
import Dubai from './Dubai.jpg'
import Iceland from './Iceland.jpg'
import jpn from './Japonia.jpg'
import nor from './Norvegia.jpg'
import sue from './Suedia.jpg'

const Exotic = () =>{
    return(
        <div>
            <h1 className='Sea-text'>The best Exotic Excursion </h1>
            <div className='container'>

            <div className='oferts'>
                    <img src={bra} alt='Brazilia' />
                <div className='detalii'>
                    <p className='point'>Brazilia</p>
                    <p className='reducere'> 4500 &#8364;</p>
                    <p className='price'>  4230 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 07.02.2022 - 10.02.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={mex} alt='Mexico' />
                <div className='detalii'>
                    <p className='point'>Mexico</p>
                    <p className='reducere'> 3500 &#8364;</p>
                    <p className='price'>  3230 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 07.02.2022 - 10.02.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={Cuba} alt='Cuba' />
                <div className='detalii'>
                    <p className='point'>Cuba</p>
                    <p className='reducere'> 3500 &#8364;</p>
                    <p className='price'>  3230 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 07.02.2022 - 10.02.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={Dubai} alt='Dubai' />
                <div className='detalii'>
                    <p className='point'>Dubai</p>
                    <p className='reducere'> 1500 &#8364;</p>
                    <p className='price'>  1230 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 07.02.2022 - 10.02.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={Iceland} alt='iceland' />
                <div className='detalii'>
                    <p className='point'>Iceland</p>
                    <p className='reducere'> 500 &#8364;</p>
                    <p className='price'>  230 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 07.02.2022 - 10.02.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={jpn} alt='Japonia' />
                <div className='detalii'>
                    <p className='point'>Japonia</p>
                    <p className='reducere'> 4500 &#8364;</p>
                    <p className='price'>  4230 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 07.02.2022 - 10.02.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={nor} alt='Norvegia' />
                <div className='detalii'>
                    <p className='point'>Norvegia</p>
                    <p className='reducere'> 500 &#8364;</p>
                    <p className='price'>  230 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 07.02.2022 - 10.02.2022</p>
                </div>
            </div>

            <div className='oferts'>
                    <img src={sue} alt='Suedia' />
                <div className='detalii'>
                    <p className='point'>Suedia</p>
                    <p className='reducere'> 500 &#8364;</p>
                    <p className='price'>  230 &#8364; </p>
                    <p className='Rezerv'>Rezervea un loc la nr: 06228975</p>
                    <p className='Date'>De pe data de 07.01.2022 - 15.01.2022</p>
                </div>
            </div>

        </div>    
        </div>
    )
}
export default Exotic;