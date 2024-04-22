import '../CSS/saved.css'
import React, { useContext } from 'react'
import {AppContext} from '../Context/App_Context'
import FetchReceipeById from './FetchReceipeById'

const Saved = () => {
  const {savedReceipe} = useContext(AppContext);
  console.log(savedReceipe)
  return (
    <div className='saved-maincontainer'>
      

        <div className='savedcard'>
        {
          savedReceipe?.map((data)=>(
            <div className='savecard' key={data.receipe} >
              <FetchReceipeById  id={data.receipe} />
            </div>
          ))
        }
        </div>

       


        
       
    </div>
  )
}

export default Saved;