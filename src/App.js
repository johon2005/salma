import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'; 
import Header from './components/header/header';
import Body from './components/body/body'; 

function App() {
  return(
    <div> 
      <Header/> 
      <Body/>
    </div>
  )
} 
export default App