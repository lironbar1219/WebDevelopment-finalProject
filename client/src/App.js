import React, { useState } from 'react';
import './App.css'; // Assuming you're using the default styling provided by Create React App

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error('Error submitting question:', error);
      setAnswer('Sorry, there was a problem getting an answer.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ask me anything!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here"
          />
          <button type="submit">Submit</button>
        </form>
        <div className={`answer ${!answer && 'no-answer'}`}>
          <p>{answer || 'waiting...'}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
