import React from 'react';
import Quote from '../component/Quotes';
import '../styles/qoutesPage.css';

const QoutesPage = () => (
  <div className="qoutes d-flex flex-column align-center">
    <h1 className="qoutes-title">Quote of the day</h1>
    <div className="qoutes-content">
      <Quote />
    </div>
  </div>
);

export default QoutesPage;
