import React from 'react'


const myStyle = {
  color:"red"
}
const Profile = ({fullname, bio, profession, children}) => {
  const myStyle = {
    color: "red"
  }
return (
  <div>
    <h3 style={{color:"red"}}>Fullname: {fullname}</h3>
    <h3>Bio: {bio}</h3>
    <h3>Profession: {profession}</h3>
  </div>
)
}
export default Profile
