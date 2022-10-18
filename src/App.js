import Iform from './Iform';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetprivateKey from './GetprivateKey';
import SignUp from './SignUp';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Iform/>}/>
    <Route path="/GetprivateKey" element={<GetprivateKey />} />
    <Route path="/SignUp" element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
