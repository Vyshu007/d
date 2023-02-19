import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Error from './components/Error';  


import SideBar from './components/Sidebar'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";



function App() {
  return ( 
    <>
  <BrowserRouter> 
<SideBar>
    <Routes>
      
        
          <Route path="/" element={<Dashboard />} />
          
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          

          <Route path="*" element={<> not found</>} />
      
      
    </Routes> 
    
      </SideBar>
    </BrowserRouter>
    
    <Header /> 
     
     </>
    
  
  );
}

export default App;