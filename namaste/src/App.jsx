import './App.css';
import Auth from './Pages/Auth/Auth';

import Home from './Pages/Home/Home';
import Profilepg from './Pages/Profile-page/Profilepg';

function App() {
  return (
    <div className="App">
      <div className="circle" style={{top:'-18%', right:'0'}}></div>
      <div className="circle" style={{top:'36%', left:'-8rem'}}></div>
      {/* <Home/> */}
      {/* <Profilepg/> */}
      <Auth/>
    </div>
  );
}

export default App;
