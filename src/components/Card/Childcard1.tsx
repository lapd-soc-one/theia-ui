
import React from 'react'
import Childcard from './Childcard';
import "./css/Childcard.css";


function ChildCard1(props:any) {
    return (
        <div className="Card1">
            <div className='card1_content'>
        <div className="profile-photos">
            <img alt="user" className="profile-photos" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
        </div>
        <div className="personal-data">
          <h2>{props.user.name}</h2>
          <h2>{props.user.role}</h2>
        </div>
        </div>
        <div className="team-member" color='white'>{props.user.teamMembers?.length}
        </div>
    </div>
  
    )
}
export default ChildCard1;