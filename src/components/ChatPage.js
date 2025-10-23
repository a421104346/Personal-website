import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faRobot, faUser, faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ChatPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // 滚动到消息底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Call OpenAI API
  const callOpenAI = async (userMessage) => {
    try {
      // Detect the language of user's message and set appropriate system prompt
      const systemPrompt = "You are a helpful AI assistant. Please respond in the same language that the user is using. If the user writes in Chinese, respond in Chinese. If the user writes in English, respond in English. If the user writes in any other language, respond in that same language. Be natural and conversational.";
      
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage }
        ],
        max_tokens: 500,
        temperature: 0.7
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API call failed:', error);
      
      if (error.response?.status === 401) {
        return "Sorry, the API key is invalid. Please check your OpenAI API configuration.";
      } else if (error.response?.status === 429) {
        return "Too many requests. Please try again later.";
      } else if (error.code === 'NETWORK_ERROR') {
        return "Network connection error. Please check your internet connection.";
      } else {
        return "Sorry, I can't respond right now. Please try again later.";
      }
    }
  };

  // Send message
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    // Add user message
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Get AI response
    const aiResponse = await callOpenAI(userMessage.text);
    
    const aiMessage = {
      id: Date.now() + 1,
      text: aiResponse,
      sender: 'ai',
      timestamp: new Date()
    };

    // Add AI response
    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  // Handle keyboard events
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Clear chat
  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hello! I'm your AI assistant. How can I help you today?",
        sender: 'ai',
        timestamp: new Date()
      }
    ]);
  };

  // Go back to home
  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="chat-page">
      {/* Chat page header */}
      <div className="chat-page-header">
        <button className="back-btn" onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </button>
        <div className="chat-page-title">
          <FontAwesomeIcon icon={faRobot} className="chat-page-icon" />
          <h1>AI Assistant</h1>
        </div>
        <button className="clear-chat-btn" onClick={clearChat}>
          <FontAwesomeIcon icon={faTrash} />
          <span>Clear Chat</span>
        </button>
      </div>

      {/* Chat content area */}
      <div className="chat-page-content">
        <div className="chat-page-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`chat-message ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
            >
              <div className="message-avatar">
                <FontAwesomeIcon 
                  icon={message.sender === 'user' ? faUser : faRobot} 
                />
              </div>
              <div className="message-content">
                <div className="message-text">{message.text}</div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString('zh-CN', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            </div>
          ))}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="chat-message ai-message">
              <div className="message-avatar">
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="chat-page-input">
          <div className="chat-input-wrapper">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="chat-input"
              rows="1"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="send-btn"
              title="Send message"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
          <div className="chat-hint">
            Press Enter to send, Shift + Enter for new line
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;