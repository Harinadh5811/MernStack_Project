import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Navigation from './components/Navigation';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Services from './components/Services';
import ContactUs from './components/ContactUs'
import Email from './components/Email'
import Technician from './components/Technician'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar } from '@material-ui/core';

function App({store}) {
  return(
    <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" style={{ width:"70px", height:"70px" }} />
          <p>𝙻𝙰𝙿𝚃𝙾𝙿 𝚂𝙴𝚁𝚅𝙸𝙲𝙴 𝚂𝚈𝚂𝚃𝙴𝙼</p>
        </div>

        <div className="App-body">
              <Container>
                <Navigation store={store} />
                <BrowserRouter>
                  <Routes>
                    <Route path='/' element={<Login store={store} />} />
                    <Route path='/reg' element={<Registration />} />
                    <Route path='/pri' element={<Pricing />} />
                    <Route path='/blo' element={<Blog />} />
                    <Route path='/ser' element={<Services />} />
                    <Route path='/con' element={<ContactUs />} />
                    <Route path='/Ema' element={<Email/>}/>
                    <Route path='/Tec' element={<Technician/>}/>
                  </Routes>
                </BrowserRouter>
              </Container>
        </div>
      
    </div>
  );
}

export default App;