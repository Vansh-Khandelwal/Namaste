import './App.css';
import Auth from './Pages/Auth/Auth';

import Home from './Pages/Home/Home';
import Profilepg from './Pages/Profile-page/Profilepg';
import {Routes, Route, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state)=>state.authReducer.authData)
  return (
    <div className="App">
      <div className="circle" style={{top:'-18%', right:'0'}}></div>
      <div className="circle" style={{top:'36%', left:'-8rem'}}></div>
      <Routes>
        <Route path='/' element = {user?<Navigate to= 'home/'/>: <Navigate to='auth/'/>} />
        <Route path = '/home' element = {user? <Home/>: <Navigate to= '../auth/'/>} />
        {/* ../auth/ removes previous path and append auth/ */}
        <Route path='/auth' element = {user? <Navigate to = '../home/'/>:<Auth/>} />
        <Route path='/profile/:id' element = {user? <Profilepg/> :<Navigate to = '../auth/'/>} />
      </Routes>
      {/* <Profilepg/> */}
    </div>
  );
}

export default App;
