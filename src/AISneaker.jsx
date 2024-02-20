
import React, { useState } from 'react';


const AISneaker = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [promptQuestions] = useState([
    "Can you tell me about the quality of the materials used?",
    "How is the sizing of the sneakers?",
    "Are the sneakers durable?",
    "Can you provide information about the comfort level?",
    "What colors are available for the sneakers?"
  ]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handlePromptClick = (question) => {
    setInput(question);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {  
      let response;
      if(input.toLowerCase().includes("hello")) {
        response = "Hello wellcome to the sneakers world , How can i help you?";
      }else if (input.toLowerCase().includes("quality")) {
        response = "The quality of our sneakers is top-notch. We use high-quality materials to ensure durability and comfort.";
      } else if (input.toLowerCase().includes("sizing")) {
        response = "Our sneakers typically run true to size. We recommend referring to our size guide for the most accurate fit.";
      } else if (input.toLowerCase().includes("durability")) {
        response = "Our sneakers are designed to be durable and long-lasting, suitable for everyday wear.";
      } else if (input.toLowerCase().includes("comfort")) {
        response = "Our sneakers are engineered with comfort in mind, featuring cushioned insoles and supportive designs.";
      } else if (input.toLowerCase().includes("colors")) {
        response = "We offer a variety of colors for our sneakers, including classic neutrals and trendy hues.";
      } else {
        response = "I'm sorry, I didn't quite understand that. Could you please rephrase your question?";
      }
  

      setMessages([...messages, { text: response, sender: 'bot' }]);
      
      setInput('');
    }
  };

 
  

  return (
    <div className="sneaker-chat-box">
      <div className="chat-header">
        <h2>SneakerBot</h2>
      </div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="prompt-questions">
        <p>Pick Your Questions:</p>
        {promptQuestions.map((question, index) => (
          <button key={index} onClick={() => handlePromptClick(question)} className="prompt-question">
            {question}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your question here..."
          className="message-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default AISneaker;



