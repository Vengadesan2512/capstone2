import '../CSS/addreceipe.css'
import React, { useContext,useState } from 'react'
import { AppContext } from '../Context/App_Context'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'



const AddReceipe = () => {
   const navigate = useNavigate();
  const {addReceipe} = useContext(AppContext);

  const [formData, setFormData] = useState({
     title : "",
     ist : "",
     ing1 : "",
     ing2 : "",
     ing3 : "",
     ing4 : "",
     qty1 : "",
     qty2 : "",
     qty3 : "",
     qty4 : "",
     imgUrl : "",
  })

  const onChangeHandler = (e)=>{
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
  }
  const onSubmitHandler = async(e)=>{
    e.preventDefault()
    const { title,
      ist,
      ing1,
      ing2,
      ing3,
      ing4,
      qty1,
      qty2,
      qty3,
      qty4,
      imgUrl,} = formData;
    const result =await addReceipe( title,
      ist,
      ing1,
      ing2,
      ing3,
      ing4,
      qty1,
      qty2,
      qty3,
      qty4,
      imgUrl,);
    console.log("add receipe",result)
toast.success(result.data.message, {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  //  console.log(result.data)
setTimeout(() => {
    navigate('/')
}, 1500);
  }
  return (
    
      <div className='add-maincontainer'>
       <ToastContainer/>
      <div className='addreceipe'>
  <p>Add Your Receipe Here!!!!</p>
 <form onSubmit={onSubmitHandler}>
   <div className='ing-list'>
    <input value={formData.title} onChange={onChangeHandler} type="text" id='title' name='title' className='receipeinput' placeholder='Title :'/>
     <input value={formData.ing1} onChange={onChangeHandler} type="text" id='ing1'  name='ing1' className='receipeinput' placeholder='Ing1 :' />
      <input value={formData.ing2} onChange={onChangeHandler} type="text" id='ing2' name='ing2' className='receipeinput' placeholder='Ing2 :' />
       <input value={formData.ing3} onChange={onChangeHandler} type="text" id='ing3' name='ing3' className='receipeinput' placeholder='Ing3 :' />
        <input value={formData.ing4} onChange={onChangeHandler} type="text" id='ing4' name='ing4' className='receipeinput' placeholder='Ing4 :' />
          <input value={formData.qty1} onChange={onChangeHandler} type="text" id='qty1' name='qty1' className='receipeinput' placeholder='Quantity 1 :' />
           <input value={formData.qty2} onChange={onChangeHandler} type="text" id='qty2' name='qty2' className='receipeinput' placeholder='Quantity 2 :' />
            <input value={formData.qty3} onChange={onChangeHandler} type="text" id='qty3' name='qty3' className='receipeinput' placeholder='Quantity 3 :' />
             <input value={formData.qty4} onChange={onChangeHandler} type="text" id='qty4' name='qty4' className='receipeinput' placeholder='Quantity 4 :' />
               <textarea value={formData.ist} onChange={onChangeHandler} id='ist' name='ist' className='receipeinput' placeholder='Instruction :'/>
                <input value={formData.imgUrl} onChange={onChangeHandler} type="text" id='imgUrl' name='imgUrl' className='receipeinput' placeholder='Img Url:' />
               
             

  </div>
   <button type='submit'>Add</button>
 </form>
 </div> 
</div>
 
    


  

  )
}

export default AddReceipe;