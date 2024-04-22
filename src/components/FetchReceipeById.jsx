import '../CSS/fetchreceipe.css'
import React, { useContext,useEffect,useState } from 'react'
import { AppContext } from '../Context/App_Context'
import {useNavigate,useLocation} from 'react-router-dom'


const FetchReceipeById = ({id}) => {
  const navigate = useNavigate()
  const location = useLocation()
   const{getReceipeById}=useContext(AppContext);
   const [receipe, setReceipe] = useState("")
  //  console.log(id)
  useEffect(() => {
    const fetchReceipe = async(id)=>{
       const result = await getReceipeById(id);
  //  console.log("receipe by id",result);
  setReceipe(result.data.receipe)
    }
  fetchReceipe(id);
  }, [id]) 
  
  return (
    <div className='fetch-maincontainer'>
      <div className='fetch-card'>
         <div className='fetchimg'>
            <img src={receipe.imgUrl} alt="" />
          </div>
          
          {location.pathname !== '/saved' &&(
                <>
                <div className='fetch-title'>
            <h3>{receipe.title}
            </h3></div>
                  <div className='ist-qty'>
              <div className='quantity'>
                  <h4>Quanties :</h4>
                  <h3>{receipe.ing1}</h3>
                  <h3>{receipe.ing2}</h3>
                  <h3>{receipe.ing3}</h3>
                  <h3>{receipe.ing4}</h3>
              </div>
              <div className='instruction'>
                    <h4>Instructions :</h4>
                    <p>{receipe.ist}</p>
              </div>
            </div>
            <div className='fetcbtn'>
               <button className='fetch-btm' onClick={()=>navigate('/')} id='fetchbutton' >Back To Home</button>
            </div>
                </>
              )}
            
          
           
      </div>


    </div>
  )
}

export default FetchReceipeById;