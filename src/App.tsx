import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import TestimonialCard from './components/testimonials/testimonialCard';

function App() {
  const person = {
    name: 'Mohamed Alaa',
    course: '3d Art Course',
    comment: 'Awooooooooooooooooooooooooooooga',
    date: '17 November 2015',
  };
  return (
    <TestimonialCard
      name={person.name}
      date={person.date}
      comment={person.comment}
      course={person.course}
    />
  );
}

export default App;
