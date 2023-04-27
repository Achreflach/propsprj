import './App.css';
import Profile from './Profile.js/Profile';



const data = {
  fullname:"Achref lach",
  bio:"This is my bio",
  Profession: "Instructor"
}






function App() {
  const handleName = (name) => {
    alert(`My name is ${name}`)
  }
  return (
    <div className="App">
      <h1>TEST</h1>
      <butto onClick={handleName("Achref")}>Show my name</butto>
    <Profile fullname={"Achref lach"} bio={"this is bio"} profession={"Instructor"} />
    <img src={paulo} alt="" />
    <Profile />
    </div>
  )
}
export default App;