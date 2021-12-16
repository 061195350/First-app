import React, { useRef } from 'react';
import './Text.css';

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


function openModal(){

        if(document.getElementById('myModal')){
            modal.style.display = "block"
    }else{
        alert('not function')
    }

    
   
}

function closeModal(){

        if(document.getElementsByClassName("close")[0]){
            modal.style.display = "none";
        }else{
            alert('not function')
        }
    
}


const Text = () => {
    return(
        <div className='back'>
            <div className='container'>
                <div className='description'>
                    <h1 className='h1'>Sky Travel</h1>
                    <h3 className='h3'>Calatoreste alaturi de noi in orice colt al lumii la cele mai avantajoase preturi</h3>
                </div>

            <div className='message'>
                <div className="send-message">
                    <h3 id="myBtn" onClick={openModal}>Send Message</h3>
                 </div> 
            </div>
            
            {/*Modal Window*/}
            <div id="myModal" className="modal">
             <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h1 id='h1'>Completati caseta </h1>
                <input type="text"  placeholder="Nume" className="text" />
                <input type="text" placeholder="Prenume" className="surname"/>
                <input type="text" placeholder="Email" className="email"/>
                <textarea className="textarea"></textarea>
                <button className="b1">From Input</button>
              </div>
            </div>
            
        </div>
    </div>
    )
}
export default Text;