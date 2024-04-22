import { useContext } from 'react';
import '../CSS/profile.css'
import { AppContext } from '../Context/App_Context';
import '../CSS/home.css'

const Profile = () => {
 const {user,userReceipe}= useContext(AppContext)
  return (
    <>
  <div className='profile-maincontainer'>
    <div className='profiletitle'>
        <h1>welcome,{user.name} </h1>
      <h2>{user.gmail} </h2>
  </div>
  <div>
      <div className='home-maincontainer'>
      {userReceipe?.map((data) => (
      <div key={data._id}>
        <div  className='homecard'>
          <div className='img'>
            <img src={data.imgUrl} alt="" />
          </div>
          <div className='title-home'>
            <h3>{data.title}</h3>
          </div>
        </div>
        </div>
      ))}
    </div>
  </div>
   
  </div>
    
    
    </>
  )
}

export default Profile;