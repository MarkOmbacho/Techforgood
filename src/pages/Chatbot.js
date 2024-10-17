import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Define specific responses for organization-specific queries
  const getBotResponse = (userInput) => {
    const formattedInput = userInput.toLowerCase();

    // TechForGood specific chatbot responses
    if (formattedInput.includes('services')) {
      return "TechForGood offers a wide range of services including Data Analytics, Web Development, AI Solutions, and Digital Transformation consulting.";
    } else if (formattedInput.includes('contact')) {
      return "You can contact TechForGood through our email: contact@techforgood.org or call our support hotline at +1-800-555-5555.";
    } else if (formattedInput.includes('mission')) {
      return "Our mission at TechForGood is to leverage technology to solve pressing societal challenges and drive meaningful change across the world.";
    } else if (formattedInput.includes('team')) {
      return "Our team consists of experienced professionals in software development, AI, and consulting. We work passionately to provide innovative tech solutions.";
    } else if (formattedInput.includes('education')) {
      // Recommend DataCamp based on user profile
    return `Based on your profile, I would recommend Data Camp, Python for data science track.

    **Online Resources:**

    * DataCamp: This platform offers interactive courses and tutorials on data science topics, including Python, data analysis, and machine learning.
    * Kaggle: This platform provides a community for data scientists to compete in challenges, share their work, and learn from others.
    * Medium: Many data scientists and researchers publish articles and tutorials on Medium, covering a wide range of topics related to data science.`;
    } else if (formattedInput.includes('location')) {
      return "We are headquartered in San Francisco, CA. However, we serve clients globally through our remote teams.";
    } else if (formattedInput.includes('projects')) {
      return "We’ve worked on various projects including education technology platforms, healthcare data analysis tools, and blockchain solutions for supply chain transparency.";
    } else if (formattedInput.includes('support')) {
      return "For support, you can reach us at support@techforgood.org or visit our Support Center on the website.";
    } else {
      return "I'm here to help! Please ask about our services, team, mission, projects, pricing, or how to contact us.";
    }
  };

  // Handle sending messages and responding with specific replies
  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { user: 'You', text: input }];
      setMessages(newMessages);

      // Simulate a delay before bot response
      setTimeout(() => {
        const botReply = getBotResponse(input);
        setMessages([...newMessages, { user: 'Bot', text: botReply }]);
      }, 1000);

      setInput(''); // Clear the input field after sending
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
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <i>powered by Compass</i>
    </div>
  );
};

export default Chatbot;
