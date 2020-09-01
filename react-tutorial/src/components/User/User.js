import React, { useState } from 'react';
import './User.css'

const User = (props) => {

  const { name, email, picture, website, phone } = props.user;
  const fullName = name.first + '' + name.last;
  const addMember = props.addMember;
  const userContainer= {
    display: 'flex', 
    width: '30%',
    padding: '0 20px',
    background: '#ddd',
    marginBottom: '10px',
    border: '2px solid red'

  }

  const imgBox = {
    width: '200px'
  }

  const infoBox = {
    padding: '10px 10px'
  }

  const img = {
    maxWidth: '200px'
  }

  const [mobile, setMobile] = useState('');
  

  const showPhone = () => {
    setMobile(phone);
  }
  
 
  return (
    <div style={userContainer}>
      <div style= {imgBox}>
        <img style={img} src={picture.large} alt=""/>
      </div>

      <div style= {infoBox} >
        <h2>{fullName}</h2>
        <h4>email: {email}</h4>
        <h4>{website}</h4>
        <p>Phone: {mobile}</p>
        <div style={{ marginBottom: '30px'}}>
          <button style={{marginRight:'5px'}} onClick={showPhone}> show phone</button>
          <button onClick={() =>  addMember(fullName)}>add me</button>
        </div>
      </div>
      
    </div>
  );
};

export default User;