
import { useState } from 'react';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import './App.css';

// import Navbar from './components/Navbar';
// let name  = "rohan ravindra shinde"
function App() {
  const[mode, setMode] = useState('light'); // whther dark mode is enable or not

  let toggleMode = ()=>{
if(mode =="light"){
  setMode("dark");
  document.body.style.backgroundColor = "gray"
}else{
  setMode("light");
  document.body.style.backgroundColor = "#f8f9fa"
}
  }
  return (
<>
<Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
<div className="container">
{/* <About/> */}
<TextForm heading="Enter the text to anylize"  mode ={mode}/>
</div>
<div>
</div>
</>  );
}

export default App;
