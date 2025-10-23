import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faPaperPlane,
  faUser,
  faCalendarAlt,
  faHeart,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';

const MessageBoard = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        // Load messages from Firebase
        const q = query(
          collection(db, 'messages'),
          orderBy('timestamp', 'desc')
        );
        const querySnapshot = await getDocs(q);
        const loadedMessages = [];

        querySnapshot.forEach(doc => {
          const data = doc.data();
          loadedMessages.push({
            id: doc.id,
            ...data,
            timestamp: data.timestamp?.toDate() || new Date(),
          });
        });

        setMessages(loadedMessages);
      } catch (error) {
        console.error('Error loading messages:', error);
        // Fallback to mock data if Firebase fails
        const mockMessages = [
          {
            id: 1,
            name: 'Test User - John',
            message:
              '🔧 This is mock test data - Great portfolio! Love the AI chat feature. Very innovative!',
            timestamp: new Date('2024-01-15'),
            likes: 5,
          },
          {
            id: 2,
            name: 'Test User - Sarah',
            message:
              '🔧 This is mock test data - The weather app is really well-designed. Clean UI and responsive design. Keep up the good work!',
            timestamp: new Date('2024-01-14'),
            likes: 3,
          },
          {
            id: 3,
            name: 'Test User - Mike',
            message:
              '🔧 This is mock test data - Impressive projects! The personal website shows great attention to detail. Looking forward to seeing more of your work.',
            timestamp: new Date('2024-01-13'),
            likes: 7,
          },
        ];
        setMessages(mockMessages);
      }
    };

    loadMessages();
  }, []);

  const handleInputChange = e => {
    setNewMessage({
      ...newMessage,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!newMessage.name.trim() || !newMessage.message.trim()) {
      alert('Please fill in your name and message.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create new message object for Firebase
      const messageToAdd = {
        name: newMessage.name.trim(),
        email: newMessage.email.trim(),
        message: newMessage.message.trim(),
        timestamp: serverTimestamp(),
        likes: 0,
      };

      // Add to Firebase
      const docRef = await addDoc(collection(db, 'messages'), messageToAdd);

      // Add to local state with generated ID and current timestamp
      const localMessage = {
        id: docRef.id,
        ...messageToAdd,
        timestamp: new Date(),
      };
      setMessages(prev => [localMessage, ...prev]);

      // Reset form
      setNewMessage({ name: '', email: '', message: '' });
      alert('Thank you for your message! It has been posted successfully.');
    } catch (error) {
      console.error('Error saving message:', error);
      alert(
        'Sorry, there was an error posting your message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    navigate('/');
  };

  const formatDate = date => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="message-board-page">
      {/* Header */}
      <div className="message-board-header">
        <button className="back-btn" onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </button>
        <div className="message-board-title">
          <FontAwesomeIcon icon={faComment} className="message-board-icon" />
          <h1>Message Board</h1>
        </div>
        <div className="message-stats">
          <span>{messages.length} Messages</span>
        </div>
      </div>

      <div className="message-board-content">
        {/* Message Form */}
        <div className="message-form-container">
          <h2>Leave a Message</h2>
          <p>Share your thoughts, feedback, or suggestions!</p>

          <form onSubmit={handleSubmit} className="message-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={newMessage.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email (optional)"
                value={newMessage.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your message or feedback *"
                value={newMessage.message}
                onChange={handleInputChange}
                rows="4"
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              {isSubmitting ? 'Posting...' : 'Post Message'}
            </button>
          </form>
        </div>

        {/* Messages List */}
        <div className="messages-container">
          <h2>Recent Messages</h2>
          {messages.length === 0 ? (
            <div className="no-messages">
              <FontAwesomeIcon icon={faComment} />
              <p>No messages yet. Be the first to leave a message!</p>
            </div>
          ) : (
            <div className="messages-list">
              {messages.map(message => (
                <div key={message.id} className="message-card">
                  <div className="message-header">
                    <div className="message-author">
                      <FontAwesomeIcon icon={faUser} className="author-icon" />
                      <span className="author-name">{message.name}</span>
                    </div>
                    <div className="message-date">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      <span>{formatDate(message.timestamp)}</span>
                    </div>
                  </div>

                  <div className="message-content">
                    <p>{message.message}</p>
                  </div>

                  <div className="message-actions">
                    <button className="like-btn">
                      <FontAwesomeIcon icon={faHeart} />
                      <span>{message.likes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBoard;
