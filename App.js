import Navbar from "./Navbar"
import image from "./images/airjordan1.png"
import Signup from "./Signup"
import Shoes from "./Shoes"
import Contact from "./Contact"
import {Route, Routes} from "react-router-dom"



function App() {


  return (
    <>
   <Navbar />

      <div className="container">
      
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Shoes" element={<Shoes />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes> 
      </div>
      <img src={image} alt="airjordan1" className="my-image" />
    </>
  );
}
export default App;
