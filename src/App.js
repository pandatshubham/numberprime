
import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import Aboutus from "./components/About us";

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [Mode,SetMode] =useState('light');
  const [alert,setAlert] =useState(null)

  const showAlert = (type,message) =>{
    setAlert({
      type:type,
      message:message
    });

    
  }
  const handlemode = () =>{
    if(Mode === 'light'){
      SetMode('dark');
      showAlert('success','Dark mode enebled')
    }
    else{
      SetMode('light');
      showAlert('success','Light mode enabled')
    }
  }
  setTimeout(function(){
    setAlert(null)
  },1500)



  return (
    // <BrowserRouter>
    <>
    <Navbar mode={Mode} handleMode={handlemode}  title="navbar" titlebtn="about" Btn="login"/>
   <Alert alert={alert}/>
   <textform mode={Mode}/>
   </>
    // <Routes>
    // <Route path='/' element={<Textform showAlert={showAlert} mode={Mode}/>}/>
    // <Route path='/about' element={<Aboutus/>}/>
    


  //   </Routes>
  // </BrowserRouter>
  );
}

export default App;
