import React from 'react';
import TestimonialCard from './testimonialCard';

function TestimonialsList() {
  const testimonials = [
    {
      name: '',
      course: '',
      comment: '',
      date: '',
    },
    {
      name: '',
      course: '',
      comment: '',
      date: '',
    },
    {
      name: '',
      course: '',
      comment: '',
      date: '',
    },
  ];
  return (
    <div>
      {testimonials.map((testimonial) => (
        <TestimonialCard
          name={testimonial.name}
          comment={testimonial.comment}
          course={testimonial.course}
          date={testimonial.date}
        />
      ))}
    </div>
  );
}

export default TestimonialsList;
