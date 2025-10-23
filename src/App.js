import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ChatPage from './components/ChatPage';
import MessageBoard from './components/MessageBoard';
import './styles/App.css';

function App() {
  return (
    <Router basename="/Personal-website">
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/messages" element={<MessageBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
