import React, { useState, useEffect } from 'react';
import '../styles/qoutesPage.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuote = async () => {
      setLoading(true);
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=humor', {
        headers: {
          'X-Api-Key': 'vujSyOJsI1fARiXvFCpcLXak74V65wxI4Xy1joPd',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setQuote(data[0].quote);
        setLoading(false);
      } else {
        setError('Opps! Something went wrong!');
        setLoading(false);
      }
    };
    getQuote();
  }, []);

  if (loading) {
    return (
      <div className="quote">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quote">
        <h1>Quote of the day</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="quote">
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
