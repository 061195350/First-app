import React from 'react' 
import './App.css';
import Header from './Components/Header/Header';
import  'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import AllComponents from './Components/AllComponts/AllComponents';
import Oferts from './OfertsComponent/Oferts/Oferts';
import { Route, NavLink } from 'react-router-dom';
import Text from './Components/Desc/Text';
import Country from './Components/Country/Country';
import Special from './Components/OfertsSpecial/Special';
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Footer';


function App(){
  return (
   <BrowserRouter>
    
     <Header />
     <Route path='/oferts' component={Oferts} />
   {/*  <Text />
     <Country />
     <Special />
     <div className='btnrezerv'>
                <div className='container'>
                <div className='send-rezerv'>
                <p><NavLink  to='/oferts' className='link'>Vezi mai multe oferte</NavLink></p>
              </div></div></div> 
   */}
    <Route exact path='/' component={AllComponents} />
    
     {/*<Categories /> */}
     <Footer />

   </BrowserRouter>
    
  );
}

export default App;
