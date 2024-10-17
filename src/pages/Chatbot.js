import React, { useState } from 'react';


const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { user: 'You', text: input }]);
      // Simulate chatbot response
      setTimeout(() => {
        setMessages([...messages, { user: 'You', text: input }, { user: 'Bot', text: "I'm here to help!" }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-header">TechForGood Chatbot</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.user === 'You' ? 'user' : 'bot'}`}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <i>powered by compass</i>
    </div>
  );
};

export default Chatbot;
