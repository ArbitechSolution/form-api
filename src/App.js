import Iform from './Iform';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetprivateKey from './GetprivateKey';
import SignUp from './SignUp';
import Download from './Download';
import Model from './Componet/Model';
import DeleteKey from './DeleteKey';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    {/* <Model/> */}
    <Routes>
    {/* <Route path='/' element={<Iform/>}/> */}
    <Route path="/" element={<SignUp/>} />
    <Route path="/GetprivateKey" element={<GetprivateKey />} />
    <Route path="/Download" element={<Download/>} />
    <Route path="/DeleteKey" element={<DeleteKey/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
