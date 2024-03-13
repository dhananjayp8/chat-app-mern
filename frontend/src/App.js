import { Button } from '@chakra-ui/react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import homePage from './pages/homePage';
import chatPage from './pages/chatPage';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" Component={homePage}/>
      <Route path="/chats" Component={chatPage}/>
      </Routes>
      
        
    </div>
  );
}

export default App;
