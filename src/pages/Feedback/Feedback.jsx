import React, { useState } from 'react';
import './feedback.css'; // Certifique-se de que o CSS está sendo importado corretamente

const FeedbackForm = () => {
  // const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, feedback, description, rating });
  };

  return (
    <div className="feedback-container">
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label>Classificação:</label>
          <div className="rating">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= rating ? "on" : "off"}
                  onClick={() => setRating(index)}
                >
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>
        {/* <div className="form-group">
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div> */}
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
