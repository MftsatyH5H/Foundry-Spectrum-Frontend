import React from 'react';
import TestimonialCard from './testimonialCard';

function TestimonialsList({className}: any) {
  const testimonials = [
    {
      name: 'Alice Johnson',
      course: 'Web Development',
      comment: 'This course was amazing! The instructor explained everything clearly,  and I feel confident building websites now.',
      date: '15 October 2024',
    },
    {
      name: 'Michael Smith',
      course: 'Data Science',
      comment: 'The course exceeded my expectations. The projects were hands-on and taught me practical skills I can use in my job.',
      date: '18 October 2024',
    },
    {
      name: 'Sophia Lee',
      course: 'Graphic Design',
      comment: 'I loved the creative exercises and the feedback I received from the mentor. Highly recommend this program!',
      date: '1 November 2024',
    },
    {
      name: 'James Brown',
      course: 'Digital Marketing',
      comment: 'Great content and resources! I landed my first freelance client right after finishing this course.',
      date: '12 November 2024',
    },
    {
      name: 'Emily Davis',
      course: 'Machine Learning',
      comment: 'A challenging but rewarding course. The assignments helped me understand complex concepts step-by-step.',
      date: '3 December 2024',
    },
    {
      name: 'Daniel Martinez',
      course: 'Cybersecurity',
      comment: 'An excellent introduction to cybersecurity. The real-world case studies were particularly insightful.',
      date: '10 January 2025',
    },
    {
      name: 'Olivia Wilson',
      course: 'UI/UX Design',
      comment: 'The course gave me a solid foundation in design principles, and the final project helped me build my portfolio.',
      date: '20 January 2025',
    },
    {
      name: 'Liam Carter',
      course: 'Mobile App Development',
      comment: 'I learned so much about building apps for iOS and Android. The step-by-step guidance was incredible.',
      date: '5 February 2023',
    },
    {
      name: 'Emma White',
      course: 'Cloud Computing',
      comment: 'The cloud computing course was packed with industry-relevant information. It really helped me grow my career.',
      date: '17 November 2015',
    },
    {
      name: 'Noah Green',
      course: 'Python Programming',
      comment: 'This course made learning Python so easy and fun. The coding challenges were super helpful. This course made learning Python so easy and fun. The coding challenges were super helpful. This course made learning Python so easy and fun. The coding challenges were super helpful. This course made learning Python so easy and fun. The coding challenges were super helpful.',
      date: '25 March 2018',
    },
    {
      name: 'Isabella Clark',
      course: 'Project Management',
      comment: 'I now feel more confident managing projects at work. The tools and techniques taught were very practical.',
      date: '8 July 2020',
    },
    {
      name: 'Ethan Wright',
      course: 'Artificial Intelligence',
      comment: 'The AI course was extremely comprehensive. I feel ready to tackle real-world AI problems now! lorem ipsum The AI course was extremely comprehensive. I feel ready to tackle real-world AI problems now! lorem ipsum The AI course was extremely comprehensive. I feel ready to tackle real-world AI problems now! lorem ipsum The AI course was extremely comprehensive. I feel ready to tackle real-world AI problems now! lorem ipsum ',
      date: '14 September 2022',
    },
  ];  
  return (
    <>
    <div className={`flex flex-wrap ${className} items-evenly w-full gap-[24px]`}>
  {testimonials.map((testimonial, index) => (
    <TestimonialCard
      key={index}
      name={testimonial.name}
      comment={testimonial.comment}
      course={testimonial.course}
      date={testimonial.date}
    />
  ))}
</div>
<div className="flex justify-center items-center w-full">
  <button className="bg-[#332052] text-foundryyellow font-semibold px-5 py-3 rounded-md">
    Load More 50+
  </button>
</div>

    </>
  );
}

export default TestimonialsList;
