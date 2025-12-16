import React, {Fragment} from 'react';
import './App.css';
import FamousCities from './Component/Famous-cities'


function App() {
  return (
    <Fragment>
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <h2 className='navbar-brand'> <span className='text-white fw-bold m-1'>City</span> <span className='text-warning '>Book</span></h2> {/* span is inline  having no margin on top and bottom */}
    </nav>
    <FamousCities/>
    </Fragment>
    
  );
}
export default App;

